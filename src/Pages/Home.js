import React from "react";
import "./pages.css";
import burger from "./Images/burger.png";
import LocalizedStrings from "react-localization";
import { useNavigate } from "react-router-dom";

const heading = {
  "font-size": "55px",
  "font-family": "Georgia",
  color: "white",
  'font-weight': 'bolder',
  'text-align': 'left'
};

const subHeading = {
  "font-size": "15px",
  "font-family": "Georgia",
  color: "grey",
}

let strings = new LocalizedStrings({
  en: {
    title: "Discover Restaurents that deliver near you",
    nameplchlder: "Name",
  },
});

function Home() {
  const navigate = useNavigate();
  return (
    <div class="row" style={{marginLeft: "150px", marginTop: "57px"}}>
      <div class="col-4">
        <h1 style={heading}>{strings.title}</h1>
        <br />
        <label style={subHeading}>
          A hamburger, or simply burger, is a food consisting of
          fillings—usually a patty of ground meat, typically beef—placed inside
          a sliced bun or bread roll.
        </label>
        <button class="ui inverted yellow button" style={{marginTop: "20px", marginBottom: "10px"}} onClick={() => {navigate("/Recipes")}}>
          Order Now
        </button>
      </div>
      <div class="col-8">
        <img
          src={burger}
          id="burgerimg"
          className="img-fluid rounded-start"
          alt="burger"
        />
      </div>
    </div>
  );
}

export default Home;
