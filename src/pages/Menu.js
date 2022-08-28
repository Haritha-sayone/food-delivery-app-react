import React, { useState, useEffect } from "react";
import './Menu.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";


function Menu() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "items")).then(snapshot => {
            const allItems = snapshot.docs.map(doc => (
                {
                    ...doc.data(),
                    id: doc.id
                }
            ));
            setItems(allItems)
        }).catch(err => console.log(err))
    }, [items]);

    return (
        <div className="card-group row">
            {
                items.map(item => {
                    return (
                        <div className="col-4" key={item.id}>
                            <div className="card" style={{ margin: "20px" }}>
                                <img src={item.img} className="card-img-top" alt="food" width={"10px"} height={"200px"} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.itemName}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{item.price}₹</li>
                                </ul>
                                <div className="card-body">
                                    <button className="btn btn-success">Order</button>
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
