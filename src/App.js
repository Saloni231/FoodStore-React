import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import About from "./Pages/About";
import Recipes from "./Pages/Recipes";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
