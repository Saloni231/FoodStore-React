import React, { useEffect, useState } from "react";
import "./pages.css";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, push } from "firebase/database";

function RecipesPage() {
  const auth = getAuth();
  const database = getDatabase();

  const navigate = useNavigate();

  const imgCss = {
    width: "230px",
    height: "200px",
  };
  const titleCss = {
    color: "white",
    textAlign: "justify",
    fontSize: "20px",
    "font-family": "Georgia",
    marginTop: "10px",
  };

  const heading = {
    textAlign: "center",
    fontSize: "50px",
    "font-family": "Georgia",
    padding: "17px",
    fontWeight: "bold",
    background: "rgb(255,200,0)",
    color: "white",
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/data").then((response) => {
      setRecipes(response.data);
    });
  }, []);

  const addItemToCart = (data) => {
    console.log(data.recipe);
    const recipe = data.recipe;
    const recipeListRef = ref(database, "recipes/");
    const newRecipeRef = push(recipeListRef);

    set(newRecipeRef, {
      id: recipe.id,
      name: recipe.name,
      price: recipe.price,
      image: recipe.image,
      email: auth.currentUser.email,
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <React.Fragment>
      <h1 style={heading}>Our Recipes</h1>
      <div className="row" style={{ margin: "50px", marginLeft: "70px" }}>
        {recipes.map((recipe) => {
          return (
            <div className="col" style={{ padding: "20px" }} key={recipe.id}>
              <img src={recipe.image} style={imgCss} alt={recipe.name} />
              <div className="row" style={titleCss}>
                <div className="col-9">{recipe.name}</div>
                <div className="col">
                  {auth.currentUser ? (
                    <button
                      className="ui icon inverted yellow basic button"
                      onClick={() => addItemToCart({ recipe })}
                    >
                      <i class="shopping basket icon"></i>
                    </button>
                  ) : null}
                </div>
              </div>
              <div style={titleCss}>
                <strong style={{ color: "yellow" }}>$</strong>
                {"  "}
                {recipe.price}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default RecipesPage;
