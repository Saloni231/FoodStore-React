import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../index";
import "./pages.css";

function Profile() {
  const auth = getAuth();

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
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
            setGender(user.gender);
            setEmail(user.email);
            setMobile(user.mobile);
          }
        });
      }
    });
  });

  const cardCss = {
    width: "400px",
    height: "400px",
    margin: "40px",
    background: "rgb(255,200,0)",
    fontFamily: "Georgia",
    fontSize: "18px",
    textAlign: 'center',
    padding: "20px"
  };

  return (
    <React.Fragment>
      <div className="row backImg">
        <div className="col-6"></div>
        <div class="card col-7" style={cardCss}>
          <div class="image">
            {gender === 'M' ?
            <img
              src="https://semantic-ui.com/images/avatar2/large/matthew.png"
              style={{height: "200px", width: "350px"}}
            /> : <img
            src="https://semantic-ui.com/images/avatar2/large/kristy.png"
            style={{height: "200px", width: "350px"}}
          />}
          </div>
          <div class="content" style={{padding: "15px"}}>
            <div class="header">
              {firstName} {lastName}
            </div>
            <div class="meta">
              <a>{email}</a>
            </div>
            <div class="description">{mobile}</div>
          </div>
          <div class="extra content">
          <button class="ui inverted black button" onClick={signingOut}>Sign Out</button>
    </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
