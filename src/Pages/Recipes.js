import React, { Component } from "react";
import "./pages.css";

const imgCss = {
  width: "230px",
  height: "200px",
};
const titleCss = {
  color: "white",
  textAlign: "center",
  fontSize: "20px",
  "font-family": "Georgia",
  margin: "5px",
};

const heading = {
  textAlign: "center",
  fontSize: "50px",
  "font-family": "Georgia",
  padding: "17px",
  fontWeight: 'bold',
  background: 'rgb(255,200,0)',
  color: 'white'
};

export class Recipes extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={heading}>Our Recipes</h1>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
          style={{ marginTop: "100px", paddingBottom: "14px" }}
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div
                className="row"
                style={{ marginLeft: "120px", marginRight: "100px" }}
              >
                <div class="col">
                  <img
                    src={require("./Images/dal.webp")}
                    style={imgCss}
                    alt="Dal"
                  />
                  <div style={titleCss}>Dal</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}10
                  </div>
                </div>
                <div class="col">
                  <img
                    src={require("./Images/paneer.webp")}
                    style={imgCss}
                    alt="Paneer"
                  />
                  <div style={titleCss}>Paneer</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}20
                  </div>
                </div>
                <div class="col">
                  <img
                    src={require("./Images/paratha.webp")}
                    style={imgCss}
                    alt="paratha"
                  />
                  <div style={titleCss}>Paratha</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}10
                  </div>
                </div>
                <div class="col">
                  <img
                    src={require("./Images/Misal.webp")}
                    style={imgCss}
                    alt="Misal"
                  />
                  <div style={titleCss}>Misal</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}10
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div
                className="row"
                style={{ marginLeft: "120px", marginRight: "100px" }}
              >
                <div class="col">
                  <img
                    src={require("./Images/vegThali.webp")}
                    style={imgCss}
                    alt="vegThali"
                  />
                  <div style={titleCss}>Veg Thali</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}15
                  </div>
                </div>
                <div class="col">
                  <img
                    src={require("./Images/dhokla.webp")}
                    style={imgCss}
                    alt="Dhokla"
                  />
                  <div style={titleCss}>Dhokla</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}10
                  </div>
                </div>
                <div class="col">
                  <img
                    src={require("./Images/food.jpg")}
                    style={imgCss}
                    alt="Sandwich"
                  />
                  <div style={titleCss}>Sandwich</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}5
                  </div>
                </div>
                <div class="col">
                  <img
                    src={require("./Images/gulabJam.webp")}
                    style={imgCss}
                    alt="gulabJam"
                  />
                  <div style={titleCss}>Gulab Jamun</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}10
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div
                className="row"
                style={{ marginLeft: "120px", marginRight: "100px" }}
              >
                <div class="col">
                  <img
                    src={require("./Images/Noodles.webp")}
                    style={imgCss}
                    alt="noodles"
                  />
                  <div style={titleCss}>Noodles</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}10
                  </div>
                </div>
                <div class="col">
                  <img
                    src={require("./Images/jalebi.webp")}
                    style={imgCss}
                    alt="jalebi"
                  />
                  <div style={titleCss}>Jalebi</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}10
                  </div>
                </div>
                <div class="col">
                  <img
                    src={require("./Images/pakoras.webp")}
                    style={imgCss}
                    alt="pakoras"
                  />
                  <div style={titleCss}>Pakoras</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}5
                  </div>
                </div>
                <div class="col">
                  <img
                    src={require("./Images/kachori.webp")}
                    style={imgCss}
                    alt="kachori"
                  />
                  <div style={titleCss}>Kachori</div>
                  <div style={titleCss}>
                    <strong style={{ color: "yellow" }}>$</strong>
                    {"  "}5
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Recipes;
