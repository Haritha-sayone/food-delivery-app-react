import React from "react";
import "./Home.css";
import Image from '../images/parcel.jpg';
import About from "./About";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <img src={Image} width={"1294px"} height={"510px"} alt="pic of parcel" />
            <About />
            <div className="d-grid gap-3 col-6 mx-auto" style={{ marginBottom: "60px" }}>
                <button className="btn btn-warning" type="button" onClick={() => {
                    navigate("./signup")
                }}>SignUp</button>

                <button className="btn btn-warning" type="button" onClick={() => {
                    navigate("./signin")
                }}>SignIn</button>
            </div>
            <Menu />
        </div>
    )
}

export default Home;