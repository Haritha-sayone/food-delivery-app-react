import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../images/logo.png";
import Avatar from '../images/avatar.png';

import "./Header.css";




function Header() {
    const navigate=useNavigate()
    const userLogin = () => {
        navigate("/signin")
    }

    return (
        <div>
            <header className="header">

                <div>
                    <img src={Logo} width={"80px"} height={"80px"} alt="Logo of FoodPrism" />
                    <strong id="app-name-first-span">Food<span id="app-name-second-span">Prism</span></strong>
                </div>

                <div className="nav-links">
                    {/* if logged in use is admin */}
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    {/* <Link to="about">About Us</Link> */}
                    <Link to="/signup">SignUp</Link>
                    <Link to="/signin">SignIn</Link>
                    {/* <Link to="admin">Admin</Link> */}
                </div>

                <div className="profile">
                    <img src={Avatar} width={"50px"} alt="user profile" id="avatar" onClick={userLogin} />
                </div>

            </header>
        </div>
    )
}

export default Header;