import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Menu.css';
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";


function Menu() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const viewItem = (itemID) => {
        navigate(`/items/detail/${itemID}`);
    }

    const filterRice = () => {
        const riceItems = items.filter(item => item.category === "Rice");
        setItems(riceItems);
    }

    const filterDrinks = () => {
        const drinks = items.filter(item => item.category === "Drinks");
        setItems(drinks)
    }

    const filterIcecreams = () => {
        const icecreams = items.filter(item => item.category === "Icecreams");
        setItems(icecreams);
    }

    const filterChicken = () => {
        const chickenItems = items.filter(item => item.category === "Chicken");
        setItems(chickenItems)
    }

    const filterFish = () => {
        const fishItems = items.filter(item => item.category === "Fish");
        setItems(fishItems)
    }

    const getAllItems = () => {
        getDocs(collection(db, "items")).then(snapshot => {
            const allItems = snapshot.docs.map(doc => (
                {
                    ...doc.data(),
                    id: doc.id
                }
            ));
            setItems(allItems)
        })
    }

    useEffect(() => {
        getDocs(collection(db, "items")).then(snapshot => {
            const allItems = snapshot.docs.map(doc => (
                {
                    ...doc.data(),
                    id: doc.id
                }
            ));
            setItems(allItems)
        })
    }, [items]);

    return (
        <div className="card-group row">

            <div className="filter-buttons">
                <button className="btn btn-outline-primary" onClick={getAllItems}>All</button>
                <button className="btn btn-outline-info" onClick={filterDrinks}>Drinks</button>
                <button className="btn btn-outline-success" onClick={filterIcecreams}>Icecreams</button>
                <button className="btn btn-outline-danger" onClick={filterRice}>Rice</button>
                <button className="btn btn-outline-warning" onClick={filterChicken}>Chicken</button>
                <button className="btn btn-outline-secondary" onClick={filterFish}>Fish</button>
            </div>

            <div className="row mb-5">
                {
                    items.map(item => {
                        return (
                            <div className="col-3 text-center" key={item.id}>
                                <div className="card" style={{ margin: "20px" }}>

                                    <img
                                        src={item.img}
                                        className="card-img-top"
                                        alt="food"
                                        width={"10px"}
                                        height={"200px"}
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">{item.itemName}</h5>
                                    </div>

                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{item.price}₹</li>
                                    </ul>

                                    <div className="card-body">
                                        <button className="btn block btn-success" onClick={() => viewItem(item.id)}>
                                            View
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Menu;
