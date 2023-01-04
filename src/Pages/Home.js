import React from "react";
import "./pages.css";
import LocalizedStrings from "react-localization";
import { useNavigate } from "react-router-dom";

const heading = {
  "fontSize": "55px",
  "fontFamily": "Georgia",
  color: "white",
  "fontWeight": "bolder",
  "textAlign": "left",
};

const subHeading = {
  "fontSize": "15px",
  "fontFamily": "Georgia",
  color: "grey",
};

let strings = new LocalizedStrings({
  en: {
    title: "Discover Restaurents that deliver near you",
    nameplchlder: "Name",
  },
});

function Home() {
  const navigate = useNavigate();


  return (
    <div style={{ background: "black"}}>
    <div
      className="row"
      style={{padding: "4% 8% 1.3%"}}
    >
      <div className="col-4">
        <h1 style={heading}>{strings.title}</h1>
        <br />
        <label style={subHeading}>
          A hamburger, or simply burger, is a food consisting of
          fillings—usually a patty of ground meat, typically beef—placed inside
          a sliced bun or bread roll.
        </label>
        <button
          className="ui inverted yellow button"
          onClick={() => {
            navigate("/Recipes");
          }}
          style = {{marginTop: "20px"}}
        >
          Order Now
        </button>
      </div>
      <div className="col-8" style={{paddingLeft: "20%"}}>
        <img
          src={require("./Images/burger.png")}
          id="burgerimg"
          className="img-fluid rounded-start"
          alt="burger"
        />
      </div>
    </div>
    </div>
  );
}

export default Home;
