import React from "react";
import "./pages.css";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import about from "./Images/about.png";

function Blog() {
  return (
    <div style={{ background: "white" }}>
      <hr
        style={{
          background: "rgb(255,200,0)",
          height: "10px",
          marginTop: "0",
          opacity: "1",
        }}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={about} className="imgPlate" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            maxWidth: "570px",
            textAlign: "center",
            fontSize: "12px",
            fontFamily: "sans-serif",
          }}
        >
          Food Store Is The Only Online Supermarket You Need. Daily Needs
          Delivered To Your Home Faster Than Supermarkets, Only On Food Store.
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Container>
          <Row>
            <CardGroup>
              <Card style={{ height: "450px" }}>
                <Card.Img
                  variant="top"
                  src={require("./Images/chickpea.jpg")}
                  className="cardimg"
                />
                <Card.Body>
                  <Card.Title>
                    Vegan Chickpea Curry
                    <div class="ui top left attached black label">
                      02 FEB 2019
                    </div>
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    Loaded with protein, this vegan chickpea curry is mostly
                    made with pantry staples. Throw in fresh or frozen spinach
                    for a pop of green, and you’ve got dinner
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />

              <Card style={{ height: "450px" }}>
                <Card.Img
                  variant="top"
                  src={require("./Images/naan.jpg")}
                  className="cardimg"
                />
                <Card.Body>
                  <Card.Title>
                    Instant No Yeast Naan
                    <div class="ui top left attached black label">
                      02 FEB 2019
                    </div>
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    This improvised meal shows how incorporating a few Indian
                    ingredients into your meals can make them a little more
                    exciting. Mango chutney and curry powder bring to life a
                    simple dish of sautéed shrimp and rice in this Indian food
                    recipe.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
              <Card style={{ height: "450px" }}>
                <Card.Img
                  variant="top"
                  src={require("./Images/vegan-curried.jpg")}
                  className="cardimg"
                />
                <Card.Body>
                  <Card.Title>
                    <div class="ui top left attached black label">
                      02 FEB 2019
                    </div>
                    Vegan Curried Carrot Soup
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    Creamy and fragrant with curry powder and coconut milk, this
                    soup is one of the tastiest ways to use up that bunch of
                    carrots that’s been languishing away in your produce bin
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Blog;
