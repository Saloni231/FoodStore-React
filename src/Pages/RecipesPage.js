import React, { useEffect, useState } from "react";
import "./pages.css";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { ref, set, onValue, update, child, remove } from "firebase/database";
import { db } from "../index";

function RecipesPage() {
  const auth = getAuth();

  const imgCss = {
    width: "230px",
    height: "200px",
  };
  const titleCss = {
    color: "white",
    textAlign: "justify",
    fontSize: "20px",
    fontFamily: "Georgia",
    marginTop: "10px",
  };

  const heading = {
    textAlign: "center",
    fontSize: "50px",
    fontFamily: "Georgia",
    padding: "17px",
    fontWeight: "bold",
    background: "rgb(255,200,0)",
    color: "white",
  };

  const itemCountCss = {
    marginTop: "10px",
    marginLeft: "3px",
    border: "2px solid yellow",
    width: "120px",
    borderRadius: "10px",
    padding: "5px",
    color: "yellow",
  };

  const [recipes, setRecipes] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/data").then((response) => {
      setRecipes(response.data);
      const query = ref(db, "recipes");
      return onValue(query, (snap) => {
        const data = snap.val();
        if (snap.exists()) {
          Object.values(data).map((recipeId) => {
            Object.values(recipeId).map((cartRecipe) => {
              if (cartRecipe.email === auth.currentUser.email) {
                response.data.map((recipe) => {
                  if (recipe.id === cartRecipe.id) {
                    recipe.count = cartRecipe.count;
                  }
                });
              }
            });
          });
          setRecipes(response.data);
        }
      });
    });
  }, []);

  const addItemToCart = (data) => {
    const recipe = data.recipe;
    const recipeListRef = ref(db, "recipes/" + recipe.id);
    const newRecipeRef = child(recipeListRef, auth.currentUser.uid);

    set(newRecipeRef, {
      id: recipe.id,
      name: recipe.name,
      price: recipe.price,
      image: recipe.image,
      email: auth.currentUser.email,
      count: 1,
    }).catch((error) => {
      console.log(error);
    });

    setFlag(!flag);
  };

  const increaseCount = (recipe, itemCount) => {
    const recipeRef = ref(db, "recipes/" + recipe.id);
    const updateRef = child(recipeRef, auth.currentUser.uid);

    update(updateRef, {
      count: itemCount + 1,
    });

    setFlag(!flag);
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

    setFlag(!flag);
  };

  const removeItem = (recipe) => {
    const recipeRef = ref(db, "recipes/" + recipe.id);
    const deleteRef = child(recipeRef, auth.currentUser.uid);

    remove(deleteRef);
    recipes.map((rec) => {
      if (rec.id === recipe.id) {
        rec.count = 0;
      }
    });
  };

  return (
    <>
      <React.Fragment>
      <div style={{ background: "black" }}>
        <h1 style={heading}>Our Recipes</h1>
        <div className="row" style={{ margin: "50px", marginLeft: "70px" }}>
          {recipes.map((recipe) => {
            return (
              <div className="col" style={{ padding: "20px" }} key={recipe.id}>
                <img src={recipe.image} style={imgCss} alt={recipe.name} />
                <div style={titleCss}>{recipe.name}</div>
                <div style={titleCss}>
                  <strong style={{ color: "yellow" }}>$</strong>
                  {"  "}
                  {recipe.price}
                </div>
                {auth.currentUser ? (
                  recipe.count === undefined || recipe.count === 0 ? (
                    <div
                      className="ui icon inverted yellow basic button"
                      onClick={() => addItemToCart({ recipe })}
                      style={{ marginTop: "10px" }}
                    >
                      <i className="shopping basket icon"></i>
                    </div>
                  ) : (
                    <div className="row" style={itemCountCss}>
                      <div
                        className="col-4"
                        onClick={() => decreaseCount(recipe, recipe.count)}
                      >
                        <i className="minus icon"></i>
                      </div>
                      <div className="col-4">{recipe.count}</div>
                      <div
                        className="col-4"
                        onClick={() => increaseCount(recipe, recipe.count)}
                      >
                        <i className="plus icon"></i>
                      </div>
                    </div>
                  )
                ) : null}
              </div>
            );
          })}
        </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default RecipesPage;
