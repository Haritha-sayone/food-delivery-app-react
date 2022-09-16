import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useUserAuth } from "../context/UserAuthContext";
import { getDoc, doc, addDoc, collection, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";


function FoodDetails() {
    const [item, setItem] = useState({});
    const [qty, setQty] = useState(1);
    const { id } = useParams();
    const { loggedUser, admin } = useUserAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        getDoc(doc(db, "items", id)).then(doc => {
            setItem(doc.data());
        })
    }, [id])

    const addToCart = (itemID, item) => {
        console.log(itemID, item);
        if (loggedUser === null || loggedUser === undefined) {
            navigate("/signin")
        }
        else {
            if (!admin) {
                console.log(itemID);
                dispatch({
                    type: 'addToCart',
                    payload: {
                        id: item.itemName,
                        itemId: itemID,
                        product: { ...item, qty: qty, cartId: item.itemName },
                        qty: qty,
                        total: qty * item.price
                    }
                });
                setDoc(doc(db, "cart", item.itemName), {
                    id: item.itemName,
                    cart: { ...item, qty: qty },
                    userID: loggedUser.uid,
                    user: loggedUser.email,
                });
                alert("item added to cart");
                navigate("/cart")
            }
        }
    }
    console.log(item);
    return (
        <div className='container mb-5'>
            <h1>Food Details</h1>
            <div className='card-group row' key={item.id}>
                <div className="col-3"></div>
                <div className='col-6'>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">

                            <div className="col-md-4">
                                <img
                                    src={item.img}
                                    className="img-fluid rounded-start"
                                    alt={item.itemName}
                                />
                            </div>

                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title">{item.itemName}</h5>
                                    <p className="card-text">Price : {item.price} ₹</p>
                                    <p className="card-text"><small className="text-muted">
                                        Quantity :
                                        {/* <input
                                            type="text"
                                            placeholder='1 unit'
                                            required
                                            onChange={event => setQty(event.target.value)}
                                        /> */}

                                    </small>
                                        <select value={qty} onChange={e => {
                                            setQty(e.target.value)
                                            console.log("qty = ", qty);
                                        }}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Total : {qty * item.price} ₹
                                        </small>
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card-body">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => addToCart(item.id, item)}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default FoodDetails;