import React from "react";
import './Menu.css';
import Icecream from '../images/i4.png';

function Menu() {
    return (
        <div className="card" style={{ width: "20%", margin: "40px" }}>
            <img src={Icecream} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title"><a>Chocolate</a></h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Price</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Add to Cart</a>
                {/* <a href="#" class="card-link">Another link</a> */}
            </div>
        </div>
    )
}

export default Menu;