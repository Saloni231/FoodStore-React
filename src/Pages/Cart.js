import React, { useEffect, useState } from "react";
import { ref, onValue, child, update, remove } from "firebase/database";
import { db } from "../index";
import { getAuth } from "firebase/auth";

function Cart() {
  const heading = {
    textAlign: "center",
    fontSize: "50px",
    fontFamily: "Georgia",
    padding: "17px",
    fontWeight: "bold",
    background: "rgb(255,200,0)",
    color: "white",
  };

  const imgCss = {
    width: "230px",
    height: "200px",
  };
  const titleCss = {
    textAlign: "justify",
    fontSize: "20px",
    fontFamily: "Georgia",
  };

  const emptyCss = {
    textAlign: "center",
    fontSize: "25px",
    fontFamily: "Georgia",
  };

  const itemCountCss = {
    marginTop: "10px",
    marginLeft: "3px",
    border: "2px solid rgb(255,200,0)",
    width: "150px",
    borderRadius: "10px",
    padding: "5px",
    color: "rgb(255,200,0)",
  };

  const auth = getAuth();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const query = ref(db, "recipes");
    return onValue(query, (snap) => {
      const data = snap.val();
      var recipeArray = [];
      if (snap.exists()) {
        Object.values(data).map((recipeArr) => {
          Object.values(recipeArr).map((recipe) => {
            if (recipe.email === auth.currentUser.email) {
              recipeArray = recipeArray.concat(recipe);
            }
          });
        });
        setRecipes(recipeArray);
      }
    });
  }, []);

  const increaseCount = (recipe, itemCount) => {
    const recipeRef = ref(db, "recipes/" + recipe.id);
    const updateRef = child(recipeRef, auth.currentUser.uid);

    update(updateRef, {
      count: itemCount + 1,
    });
  };

  const decreaseCount = (recipe, itemCount) => {
    const recipeRef = ref(db, "recipes/" + recipe.id);
    const updateRef = child(recipeRef, auth.currentUser.uid);

    if (itemCount > 1) {
      update(updateRef, {
        count: itemCount - 1,
      });
    } else {
      removeItem(recipe);
    }
  };

  const removeItem = (recipe) => {
    const recipeRef = ref(db, "recipes/" + recipe.id);
    const deleteRef = child(recipeRef, auth.currentUser.uid);

    remove(deleteRef);
  };

  return (
    <React.Fragment>
      {recipes.length !== 0 ? <h1 style={heading}>Recipes In Cart</h1> : null}
      {recipes.length !== 0 ? (
        recipes.map((recipe) => {
          return (
            <div
              className="row"
              style={{ textAlign: "center", margin: "50px" }}
              key={recipe.id}
            >
              <div className="col-6">
                <img src={recipe.image} style={imgCss} />
              </div>
              <div className="col" style={titleCss}>
                <div>{recipe.name}</div>
                <div style={titleCss}>
                  <strong style={{ color: "rgb(255,200,0)" }}>$</strong>
                  {"  "}
                  {recipe.price}
                </div>
              </div>
              <div className="col" style={titleCss}>
                <div className="row" style={itemCountCss}>
                  <div
                    className="col-3"
                    onClick={() => decreaseCount(recipe, recipe.count)}
                  >
                    <i className="minus icon"></i>
                  </div>
                  <div className="col-6" style={{ textAlign: "center" }}>
                    {recipe.count}
                  </div>
                  <div
                    className="col-2"
                    onClick={() => increaseCount(recipe, recipe.count)}
                  >
                    <i className="plus icon"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div
          className="row"
          style={{ textAlign: "center", background: "white" }}
        >
          <div className="col-12">
            <img
              src={require("./Images/emptyCart.gif")}
              style={{ width: "500px" }}
            />
            <div style={emptyCss}>Your Cart is Empty.</div>
            <div>Looks like you haven't made your choices yet..</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Cart;
