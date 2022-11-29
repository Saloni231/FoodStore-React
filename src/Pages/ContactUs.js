import React from "react";
import companyLogo from "./Images/food.jfif";
import "./pages.css";

export default function ContactUs() {
  return (
    <div class="row" style={{ padding: "57px", background: "rgb(255,200,0)" }}>
      <div class="col" style={{marginLeft: "60px"}}>
        <h1>
          {" "}
          Request A <font color="#FFFFFF"> Call Back</font>
        </h1>
        <br />
        <form className="ui form">
          <input
            class="form-control"
            id="inputdefault"
            type="text"
            placeholder="Name"
            name="name"
          />{" "}
          <br />
          <input
            class="form-control"
            id="inputdefault"
            placeholder="Phone number"
            name="phone"
          />
          <br />
          <input
            class="form-control"
            id="inputdefault"
            placeholder="Email Id"
            name="EMail"
          />
          <br />
          <textarea
            name="message"
            cols="55"
            rows="3"
            placeholder="Message"
          ></textarea>
          <button
            type="button"
            class="btn btn-dark"
            style={{ marginTop: "10px" }}
          >
            Submit
          </button>
        </form>
      </div>
      <div class="col">
        <img
          src={companyLogo}
          id="img"
          className="img-fluid rounded-start"
          alt="..."
          style={{ width: "400px", height: "350px" }}
        />
      </div>
    </div>
  );
}
