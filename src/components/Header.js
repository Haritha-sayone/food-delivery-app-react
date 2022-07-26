import React from "react";
import logo from "../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div>
                <img src={logo} width={"80px"} height={"80px"} alt="Logo of FoodPrism" />
                <strong id="app-name-first-span">Food<span id="app-name-second-span">Prism</span></strong>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="menu">Menu</Link>
                {/* <Link to="about">About Us</Link> */}
                <Link to="signup">SignUp</Link>
                <Link to="signin">SignIn</Link>
            </div>
        </header>
    )
}

export default Header;