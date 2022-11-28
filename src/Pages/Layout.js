import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import registered from './r-circle.svg'

function Layout() {
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
              <div
                  className="item"
                  style={{ fontWeight: "bold", fontSize: "20px", color: "white"}}
                >
                  FOOD STORE<img src={registered} style={{width: "10px", height: "10px"}}/>
                </div>
                <div className="item right">
                <NavLink className="item" to={"/"} style={({ isActive }) => (isActive ? activeLink : nonActiveLink)}>
                  Home
                </NavLink>
                <NavLink className="item" to={"/About"} style={({ isActive }) => (isActive ? activeLink : nonActiveLink)}>
                  About
                </NavLink>
                <NavLink
                  className="item"
                  to={"/Recipes"}
                  style={({ isActive }) => (isActive ? activeLink : nonActiveLink)}
                >
                  Recipes
                </NavLink>
                <NavLink className="item" to={"/Blog"} style={({ isActive }) => (isActive ? activeLink : nonActiveLink)}>
                  Blog
                </NavLink>
                <NavLink className="item" to={"/ContactUs"} style={({ isActive }) => (isActive ? activeLink : nonActiveLink)}>
                  Contact us
                </NavLink>
                <button class="ui inverted yellow button" onClick={() => {navigate('/Login')}}>Login</button>
                <button class="ui inverted button" onClick={() => {navigate('/Register')}}>Register</button>
                </div>
              </div>
            </div>
          </nav>
          <Outlet/>
        </React.Fragment>
      );
}

export default Layout