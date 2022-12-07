import { ref, set, push } from "firebase/database";
import React, { useState } from "react";
import "./pages.css";
import {db} from '../index'
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  
  const auth = getAuth();
  const navigate = useNavigate();

  const inputs = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(inputs);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const submitClicked = () => {
    const userListRef = ref(db, "messages/"+auth.currentUser.uid);
    const newUserRef = push(userListRef);

    set(newUserRef, {
      name: formValues.name,
      phone: formValues.phone,
      email: formValues.email,
      message: formValues.message,
    }).catch((error) => {
      console.log(error);
    });

    alert("Message Send Successfully!");
          navigate("/");

  };

  return (
    <div
      className="row"
      style={{ padding: "57px", background: "rgb(255,200,0)" }}
    >
      <div className="col" style={{ marginLeft: "60px" }}>
        <h1>
          {" "}
          Request A <font color="#FFFFFF"> Call Back</font>
        </h1>
        <br />
        <form className="ui form">
          <input
            className="form-control"
            id="inputdefault"
            type="text"
            placeholder="Name"
            name="name"
            value={formValues.name}
            onChange={inputChange}
          />{" "}
          <br />
          <input
            className="form-control"
            id="inputdefault"
            placeholder="Phone number"
            name="phone"
            value={formValues.phone}
            onChange={inputChange}
          />
          <br />
          <input
            className="form-control"
            id="inputdefault"
            placeholder="Email Id"
            name="email"
            value={formValues.email}
            onChange={inputChange}
          />
          <br />
          <textarea
            name="message"
            cols="55"
            rows="3"
            placeholder="Message"
            value={formValues.message}
            onChange={inputChange}
          ></textarea>
          <button
            type="button"
            className="btn btn-dark"
            style={{ marginTop: "10px" }}
            onClick={submitClicked}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="col">
        <img
          src={require("./Images/food.jfif")}
          id="img"
          className="img-fluid rounded-start"
          alt="..."
          style={{ width: "400px", height: "350px" }}
        />
      </div>
    </div>
  );
}
