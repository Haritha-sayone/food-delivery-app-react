import React, { useState, useEffect } from "react";
import './Menu.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";


function Menu() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        // getDocs(collection(db, "items")).then(snapshot => {
        //     const allItems = snapshot.docs.map(doc => (
        //         {
        //             ...doc.data(),
        //             id: doc.id
        //         }
        //     ));
        //     setItems(allItems)
        // }).catch(err => console.log(err))
        getAllItems()
    }, []);
    // const { loggedUser, admin } = useUserAuth();

    const navigate = useNavigate();

    const viewItem = (itemID) => {
        console.log(itemID);
        navigate(`/items/detail/${itemID}`)
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

    // const addToCart = (itemID, item) => {
    //     console.log("clicked",itemID);

    //     if (loggedUser === null || loggedUser === undefined) {
    //         navigate("/signin")
    //     }
    //     else {
    //         if (!admin) {
    //             // console.log(itemID);
    //             navigate(`/items/detail/${itemID}`)
    //             // dispatch({
    //             //     type: 'addToCart',
    //             //     payload: {
    //             //         id: itemID,
    //             //         product: item,
    //             //         qty:itemCount
    //             //     }
    //             // });
    //             // alert("item added to cart");
    //         }
    //     }
    // }

    return (
        <div className="card-group row">

            <div className="filter-buttons">
                <button className="btn btn-outline-primary" onClick={getAllItems}>All</button>
                <button className="btn btn-outline-info" onClick={filterDrinks}>Drinks</button>
                <button className="btn btn-outline-success" onClick={filterIcecreams}>Icecreams</button>
                <button className="btn btn-outline-danger" onClick={filterRice}>Rice</button>
                <button className="btn btn-outline-warning" onClick={filterChicken}>Chicken</button>

            </div>

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

    )
}

export default Menu;
