import React from "react";
import './Menu.css';
import Icecream from '../images/i4.png';

function Menu() {
    return (
        <div className="card" style={{ width: "20%", margin: "40px" }}>
            <img src={Icecream} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"><a>Chocolate</a></h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Price</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Add to Cart</a>
                {/* <a href="#" class="card-link">Another link</a> */}
            </div>
        </div>
    )
}

export default Menu;