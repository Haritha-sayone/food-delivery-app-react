import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useSelector } from "react-redux";
import Logo from "../images/logo.png";
import Avatar from '../images/avatar.png';
import "./Header.css";

function Header() {
    const { logout, loggedUser, admin, setAdmin } = useUserAuth();
    const navigate = useNavigate();
    const cartItemsCount = useSelector(state => state.cartCount);
    return (
        <div>
            <header className="header">

                <div>
                    <img src={Logo} width={"80px"} height={"80px"} alt="Logo of FoodPrism" />
                    <strong id="app-name-first-span">Food<span id="app-name-second-span">Prism</span></strong>
                </div>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    {
                        admin && <Link to="/admin">Dashboard</Link>
                    }
                    <Link to="/menu">Menu</Link>
                    {
                        !loggedUser && <Link to="/signin">SignIn/SignUp</Link>
                    }
                    {
                        loggedUser && <a
                            type="button"
                            onClick={() => {
                                logout().then(() => {
                                    setAdmin(false);
                                    navigate("/signin");
                                })
                            }}>Logout</a>
                    }
                    {
                        loggedUser && !admin && <Link to="/cart">Cart({cartItemsCount})</Link>
                    }
                </div>

                <div className="profile">
                    <img src={Avatar} width={"50px"} alt="user profile" id="avatar" />
                    <span>{loggedUser?.email}</span>
                </div>

            </header>
        </div>
    )
}

export default Header;