import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, Link } from "react-router-dom";
import registered from "./Images/r-circle.svg";
import logo from "./Images/Food store-1.png";
import "./pages.css";

function Layout() {
  const app = getAuth();

  const activeLink = {
    color: "yellow",
  };

  const nonActiveLink = {
    color: "white",
  };

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <nav className="ui pointing menu bg-dark navbar navbar-expand-md">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="item" to={"/"}>
              <img src={logo} style={{ width: "60px", height: "50px" }} />
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "yellow",
                }}
              >
                {" "}
                &nbsp;&nbsp;FOOD STORE
              </div>
              <img src={registered} style={{ width: "10px", height: "10px" }} />
            </Link>
            <div className="item right">
              <NavLink
                className="item"
                to={"/"}
                style={({ isActive }) =>
                  isActive ? activeLink : nonActiveLink
                }
              >
                Home
              </NavLink>
              <NavLink
                className="item"
                to={"/About"}
                style={({ isActive }) =>
                  isActive ? activeLink : nonActiveLink
                }
              >
                About
              </NavLink>
              <NavLink
                className="item"
                to={"/Recipes"}
                style={({ isActive }) =>
                  isActive ? activeLink : nonActiveLink
                }
              >
                Recipes
              </NavLink>
              <NavLink
                className="item"
                to={"/Blog"}
                style={({ isActive }) =>
                  isActive ? activeLink : nonActiveLink
                }
              >
                Blog
              </NavLink>
              <NavLink
                className="item"
                to={"/ContactUs"}
                style={({ isActive }) =>
                  isActive ? activeLink : nonActiveLink
                }
              >
                Contact us
              </NavLink>
              {!app.currentUser ? (
                <button
                  className="ui inverted yellow button"
                  onClick={() => {
                    navigate("/Login");
                  }}
                >
                  Login
                </button>
              ) : null}
              {!app.currentUser ? (
                <button
                  className="ui inverted button"
                  onClick={() => {
                    navigate("/Register");
                  }}
                >
                  Register
                </button>
              ) : null}
              {app.currentUser ? (
                <NavLink
                  className="item"
                  to={"/Profile"}
                  style={({ isActive }) =>
                    isActive ? activeLink : nonActiveLink
                  }
                >
                  Profile
                </NavLink>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </React.Fragment>
  );
}

export default Layout;
