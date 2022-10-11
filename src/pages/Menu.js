import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Menu.css';
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";


function Menu() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [filterStatus, setFilterStatus] = useState(false);
    const navigate = useNavigate();

    const viewItem = (itemID) => {
        navigate(`/items/detail/${itemID}`);
    }

    const filterRice = () => {
        setFilterStatus(true);
        const riceItems = items.filter(item => item.category === "Rice" || item.category === "rice");
        setFilteredItems(riceItems);
    }

    const filterDrinks = () => {
        setFilterStatus(true);
        const drinks = items.filter(item => item.category === "Drinks" || item.category === "drinks");
        setFilteredItems(drinks)
    }

    const filterIcecreams = () => {
        setFilterStatus(true);
        const icecreams = items.filter(item => item.category === "Icecreams" || item.category === "icecreams");
        setFilteredItems(icecreams);
    }

    const filterChicken = () => {
        setFilterStatus(true);
        const chickenItems = items.filter(item => item.category === "Chicken" || item.category === "chicken");
        setFilteredItems(chickenItems);
    }

    const filterFish = () => {
        setFilterStatus(true);
        const fishItems = items.filter(item => item.category === "Fish" || item.category === "fish");
        setFilteredItems(fishItems);
    }

    const filterFruits = () => {
        setFilterStatus(true);
        const fruits = items.filter(item => item.category === "Fruits" || item.category == "fruits");
        setFilteredItems(fruits);
    }

    const getAllItems = () => {
        setFilterStatus(false);
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

            <div className="item-category-filter-buttons">
                <button className="btn btn-outline-primary" onClick={getAllItems}>All</button>
                <button className="btn btn-outline-info" onClick={filterDrinks}>Drinks</button>
                <button className="btn btn-outline-success" onClick={filterIcecreams}>Icecreams</button>
                <button className="btn btn-outline-danger" onClick={filterRice}>Rice</button>
                <button className="btn btn-outline-warning" onClick={filterChicken}>Chicken</button>
                <button className="btn btn-outline-secondary" onClick={filterFish}>Fish</button>
                <button className="btn btn-outline-dark" onClick={filterFruits}>Fruits</button>
            </div>

            <div className="row mb-5">
                {
                    filterStatus && filteredItems?.map(item => {
                        return (
                            <div className="col-3 text-center" key={item.id}>
                                <div className="card" style={{ margin: "20px" }}>
                                    <img
                                        src={item.img}
                                        className="card-img-top"
                                        alt={item.itemName}
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

                {
                    !filterStatus && items.map(item => {
                        return (
                            <div className="col-3 text-center" key={item.id}>
                                <div className="card" style={{ margin: "20px" }}>

                                    <img
                                        src={item.img}
                                        className="card-img-top"
                                        alt={item.itemName}
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

                {
                    filterStatus && !filteredItems.length && <span className="text-center mt-5 py-5">No items found.</span>
                }
            </div>
        </div>

    )
}

export default Menu;
