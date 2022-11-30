import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import "./pages.css";

function Login() {
  const navigate = useNavigate();

  const heading = {
    height: "40px",
    "font-size": "20px",
    "font-family": "Georgia",
  };

  const auth = getAuth();

  const inputs = { email: "", password: "" };
  const [formValues, setFormValues] = useState(inputs);
  const [errorMsg, setErrorMsg] = useState({});
  const [errorCode, setErrorCode] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const valueChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });

    if (isSubmit) {
      setErrorMsg(validate(formValues));
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email Id is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email Id is not in valid format";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  const loginClicked = (event) => {
    event.preventDefault();
    setErrorMsg(validate(formValues));
    setIsSubmit(true);

    if (
      Object.keys(errorMsg).length === 0 &&
      formValues.email.length !== 0 &&
      formValues.password.length !== 0
    ) {
      signInWithEmailAndPassword(auth, formValues.email, formValues.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          alert("Logined Successfully");
          navigate("/");
          setErrorCode(null);
        })
        .catch((error) => {
          setErrorCode(error.code);
        });
    }
  };

  useEffect(() => {
    console.log(formValues);
  }, [errorMsg]);

  return (
    <React.Fragment>
      <div className="ui two column grid" style={{background: "rgb(255,200,0)"}}>
        <div className="middle aligned column">
          <img
            src={require("./Images/login.png")}
            className="img-fluid rounded-start"
            alt="login"
            style={{ height: "400px", marginLeft: "80px" }}
          />
        </div>
        <div className="card border-dark" id="login-card">
          <h1 className="ui teal ribbon label" style={heading}>
            Login
          </h1>
          <br />
          {errorCode ? (
            <div class="alert alert-danger" role="alert">
              Incorrect Email ID or Password
            </div>
          ) : null}
          <form
            className="ui form"
            style={{ padding: "20px" }}
            onSubmit={loginClicked}
          >
            <div className="field">
              <div id="heading">Email ID</div>
              <div className="ui left icon input">
                <input
                  type="text"
                  placeholder="Email ID"
                  name="email"
                  value={formValues.email}
                  onChange={valueChange}
                />
                <i className="user icon"></i>
              </div>
              {Object.keys(errorMsg).length !== 0 ? (
                <p>{errorMsg.email}</p>
              ) : null}
            </div>
            <br />
            <div className="field">
              <div id="heading">Password</div>
              <div className="ui left icon input">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={valueChange}
                />
                <i className="lock icon"></i>
              </div>
              {Object.keys(errorMsg).length !== 0 ? (
                <p>{errorMsg.password}</p>
              ) : null}
            </div>
            <div className="ui center aligned basic segment">
              <button className="ui teal submit button" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
