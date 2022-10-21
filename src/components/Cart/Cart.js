import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import { toast } from 'react-toastify';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loggedUser } = useUserAuth();
    const items = useSelector(state => state.cartItems);
    const total = useSelector(state => state.totalPrice);

    const removeFromCart = (itemID, itm) => {
        const cartID = itm.cartId;
        const itmPrice = itm.qty * itm.price;
        if (loggedUser.uid === itm.userID) {
            dispatch({
                type: 'removeFromCart',
                payload: {
                    id: itemID,
                    netAmount: itmPrice
                }
            });
            deleteDoc(doc(db, "cart", cartID));
            toast.info("Item removed");
        }
        else {
            toast.warn("You are not authorised to do this");
        }
    }

    useEffect(() => {
        if (items.length === 0) {
            navigate("/cart/empty")
        }
        else {
            setCart(items)
        }
    }, [items])

    return (
        <div className='container my-5'>
            <div className='col-6'>
                <button className="btn btn-primary" onClick={() => navigate("/menu")}>Go to Menu</button>
            </div>
            <h1 className='text-center'>Cart</h1>
            <div className='col-6'>
                Total : {total} ₹
            </div>

            {
                cart.map(item => {
                    return (
                        <div className='card-group row' key={item.id}>
                            <div className='col-3'></div>
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
                                                    Quantity : {item.qty} units
                                                </small>
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Total : {item.price * item.qty} ₹
                                                    </small>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => removeFromCart(item.id, item)}>
                                                    Remove From Cart
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-3'></div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Cart;
