import React from 'react';
import { useNavigate } from 'react-router-dom';
import emptyCart from "../images/emptyCart.svg";

const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <h1>Your Cart is Empty!</h1>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'>
                    <img src={emptyCart} width={"200px"} height={"200px"} alt='Cart is empty!' />
                    <button className="btn btn-primary" onClick={() => navigate("/menu")}>Go to Menu --&gt;</button>
                </div>
                <div className='col-4'></div>
            </div>
        </div>
    )
}

export default EmptyCart;
