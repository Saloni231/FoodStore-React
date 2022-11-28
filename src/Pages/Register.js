import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import signUp from "./signUp.webp";
import { Form } from "semantic-ui-react";

function Register() {
  const navigate = useNavigate();

  const background = {
    "background-color": "tomato",
  };

  const heading = {
    height: "40px",
    "font-size": "20px",
    "font-family": "Georgia",
  };

  const database = getDatabase();

  const auth = getAuth();

  const inputs = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(inputs);
  const [errorMsg, setErrorMsg] = useState({});
  const [errorCode, setErrorCode] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(value);

    if (isSubmit) {
      setErrorMsg(validate(formValues));
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%&?._-]).{6,}$/;
    const mobileRegex = /^[0-9]{10,10}$/;

    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile is required!";
    } else if (!mobileRegex.test(values.mobile)) {
      errors.mobile = "Mobile is not in valid format";
    }
    if (!values.email) {
      errors.email = "Email Id is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email Id is not in valid format";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!passRegex.test(values.password)) {
      errors.password =
        "Password must be 6 character long and which contain at least one number, one special character, one uppercase letter and one lowercase letter";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required!";
    } else if (
      !passRegex.test(values.confirmPassword) &&
      values.password != values.confirmPassword
    ) {
      errors.confirmPassword = "Must be similar to password";
    }
    return errors;
  };

  const signUpClicked = (event) => {
    event.preventDefault();
    setErrorMsg(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(errorMsg).length === 0 && isSubmit) {
      createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      )
        .then((userCredential) => {
          event.preventDefault();
          const user = userCredential.user;
          alert(formValues.email);
          setErrorCode(null);
          const userListRef = ref(database, "users/");
          const newUserRef = push(userListRef);

          set(newUserRef, {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            mobile: formValues.mobile,
            password: formValues.password,
          }).catch((error) => {
            console.log(error);
          });
        })
        .catch((error) => {
          setErrorCode(error.code);
          console.log(error.message);
        });
    }
  };

  return (
    <React.Fragment>
      <div className="ui segment" style={background}>
        <div className="ui two column grid">
          <div className="card border-dark signup-card">
            <h1 className="ui purple ribbon label" style={heading}>
              Sign Up
            </h1>
            <br />
            {errorCode ? (
              <div class="alert alert-danger" role="alert">
                Email ID Already in Use.
              </div>
            ) : null}
            <form
              className="ui form"
              style={{ padding: "10px" }}
              onSubmit={signUpClicked}
            >
              <div className="field">
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={inputChange}
                  />
                  <Form.Input
                    fluid
                    label="Last name"
                    placeholder="Last name"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={inputChange}
                  />
                </Form.Group>
                <div className="row">
                  <div className="col">
                    {Object.keys(errorMsg).length !== 0 ? (
                      <p>{errorMsg.firstName}</p>
                    ) : null}
                  </div>
                  <div className="col">
                    {Object.keys(errorMsg).length !== 0 ? (
                      <p>{errorMsg.lastName}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="field">
                <h5 id="signUpHeading">Email ID</h5>
                <div className="ui left icon input">
                  <input
                    type="text"
                    placeholder="Email ID"
                    name="email"
                    value={formValues.email}
                    onChange={inputChange}
                  />
                  <i className="user icon"></i>
                </div>
                {Object.keys(errorMsg).length !== 0 ? (
                  <p>{errorMsg.email}</p>
                ) : null}
              </div>
              <div className="field">
                <h5 id="signUpHeading">Mobile</h5>
                <div className="ui left icon input">
                  <input
                    type={"number"}
                    placeholder="Mobile"
                    name="mobile"
                    value={formValues.mobile}
                    onChange={inputChange}
                  />
                  <i className="mobile alternate icon"></i>
                </div>
                {Object.keys(errorMsg).length !== 0 ? (
                  <p>{errorMsg.mobile}</p>
                ) : null}
              </div>
              <div className="field">
                <h5 id="signUpHeading">Password</h5>
                <div className="ui left icon input">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formValues.password}
                    onChange={inputChange}
                  />
                  <i className="lock icon"></i>
                </div>
                {Object.keys(errorMsg).length !== 0 ? (
                  <p>{errorMsg.password}</p>
                ) : null}
              </div>
              <div className="field">
                <h5 id="signUpHeading">Confirm Password</h5>
                <div className="ui left icon input">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={inputChange}
                  />
                  <i className="lock icon"></i>
                </div>
                {Object.keys(errorMsg).length !== 0 ? (
                  <p>{errorMsg.confirmPassword}</p>
                ) : null}
              </div>
              <div className="ui center aligned basic segment">
                <button className="ui purple submit button" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div
            className="middle aligned column card border-dark"
            style={{ height: "500px", width: "500px", margin: "20px" }}
          >
            <img
              src={signUp}
              className="img-fluid rounded-start"
              alt="..."
              style={{ height: "450px" }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
