import React from "react";
import { Card, Col, Container, Figure, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import "./pages.css";
import about from './Images/about.png'

function About() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={about} className="imgPlate" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            maxWidth: "570px",
            textAlign: "center",
            fontSize: "13px",
            fontFamily: "sans-serif",
            fontWeight: "bold"
          }}
        >
          Food Store Is The Only Online Supermarket You Need. Daily Needs
          Delivered To Your Home Faster Than Supermarkets, Only On Food Store.
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <Container>
          <Row>
            <Col>
              <div className="alignBtnGroup">
                {["Dark"].map((variant) => (
                  <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === "light" ? "dark" : "white"}
                    style={{ width: "20rem", height: "8cm" }}
                    className="mb-2"
                  >
                    <Card.Body>
                      <Card.Title>Best Food</Card.Title>
                      <Card.Text>
                        <div style={{ fontFamily: "sans-serif", color: "white" }}>
                          An online store for high-quality commercial kitchen
                          equipment where restaurateurs can find everything
                          their business needs to function at its best. Some
                          popular types of ethnic foods include Italian, French,
                          Japanese, Chinese, American, Cajun, Thai, African,
                          Indian and Nepalese.
                        </div>
                        <Card.Link href="#" className="lnkcolor">
                          <div style={{ marginTop: "25px" }}>
                            Read More{" "}
                            <IconContext.Provider value={{ color: "white" }}>
                              <BsArrowRight />
                            </IconContext.Provider>
                          </div>
                        </Card.Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>
            <Col>
              <div id="parent">
                <div className="yello"></div>
                <div className="">
                  <img src={require("./Images/pageimg.jpg")} className="imgpage2" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
