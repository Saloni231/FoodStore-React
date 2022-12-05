import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../index";
import { getAuth } from "firebase/auth";

function Cart() {
  const imgCss = {
    width: "230px",
    height: "200px",
  };
  const titleCss = {
    color: "white",
    textAlign: "justify",
    fontSize: "20px",
    "font-family": "Georgia",
  };

  const emptyCss = {
    textAlign: "center",
    fontSize: "25px",
    "font-family": "Georgia",
  }

  const auth = getAuth();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const query = ref(db, "recipes");
    return onValue(query, (snap) => {
      const data = snap.val();
      var recipeArray = [];
      if (snap.exists()) {
        Object.values(data).map((recipe) => {
          if (recipe.email === auth.currentUser.email) {
            recipeArray = recipeArray.concat(recipe);
          }
        });
        setRecipes(recipeArray);
      }
    });
  });

  return (
    <React.Fragment>
      {recipes.length !== 0 ? (
        recipes.map((recipe) => {
          return (
            <div
              className="row"
              style={{ textAlign: "center", margin: "50px" }}
            >
              <div className="col-6">
                <img src={recipe.image} style={imgCss} />
              </div>
              <div className="col" style={titleCss}>
                <div>{recipe.name}</div>
                <div style={titleCss}>
                  <strong style={{ color: "yellow" }}>$</strong>
                  {"  "}
                  {recipe.price}
                </div>
              </div>
              <div className="col" style={titleCss}>
                1
              </div>
            </div>
          );
        })
      ) : (
        <div className="row" style={{ textAlign: "center", background: "white" }}>
          <div className="col-12">
            <img
              src={require("./Images/emptyCart.gif")}
              style={{ width: "500px"}}
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
