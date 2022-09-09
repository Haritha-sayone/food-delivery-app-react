import React from 'react';
import { useNavigate } from 'react-router-dom';
import emptyCart from "../images/emptyCart.svg";


const EmptyCart = () => {
    const navigate=useNavigate();

    return (
        <div style={{ marginLeft: "40%", marginTop: "5%" }}>
            <h1>Your Cart is Empty!</h1>
            <img src={emptyCart} width={"200px"} height={"200px"} alt='Cart is empty!' />
            <button className="btn btn-primary" onClick={() => navigate("/menu")}>Go to Menu --&gt;</button>
        </div>
    )
}

export default EmptyCart;
