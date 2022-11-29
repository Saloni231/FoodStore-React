import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../index";
import profile from "./Images/profile.webp";
import "./pages.css";

function Profile() {
  const auth = getAuth();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const signingOut = () => {
    auth.signOut().then((response) => {
      console.log("signed out");
      navigate("/");
    });
  };

  useEffect(() => {
    const query = ref(db, "users");
    return onValue(query, (snap) => {
      const data = snap.val();
      if (snap.exists()) {
        Object.values(data).map((user) => {
          if (user.email.toLowerCase() === auth.currentUser.email) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setMobile(user.mobile);
          }
        });
      }
    });
  });

  const cardCss = {
    width: "500px",
    marginTop: "43px",
    height: "400px",
    marginBottom: "40px",
    background: "rgb(255,200,0)",
    padding: "30px",
    fontFamily: "Georgia",
    fontSize: "18px",
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-3"></div>
        <div class="card col-7" style={cardCss}>
          <img
            src={profile}
            class="card-img-top center"
            alt="..."
            style={{ width: "120px", height: "120px", marginLeft: "38%" }}
          />
          <div class="card-body" style={{ textAlign: "center" }}>
            <p class="card-text text-dark">First Name : {firstName}</p>
            <p class="card-text text-dark">Last Name : {lastName}</p>
            <p class="card-text text-dark">Email : {email}</p>
            <p class="card-text text-dark">Mobile : {mobile}</p>
            <button type="button" class="btn btn-dark" onClick={signingOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
