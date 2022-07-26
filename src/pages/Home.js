import React from "react";
import image from '../img/parcel.jpg';
import About from "./About";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    return (
        <div className="home">
            <img src={image} width={"1300px"} height={"500px"} />
            <About />
            <div class="d-grid gap-3 col-6 mx-auto" style={{ marginBottom: "60px" }}>
                <button class="btn btn-warning" type="button" onClick={() => {
                    navigate("./signup")
                }}>SignUp</button>
                <button class="btn btn-warning" type="button" onClick={() => {
                    navigate("./signin")
                }}>SignIn</button>
            </div>
        </div>
    )
}

export default Home;