import { deleteDoc, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { connect } from 'react-redux';
import { cartColl } from '../../firebase/config';

const Cart = () => {
    // const [cart, setCart] = useState([]);
    const navigate = useNavigate()
    const { id } = useParams();
    const items = useSelector(state => {
        return state.cartItems
    });
    const dispatch = useDispatch();
    const itemQuantity = useSelector(state => state.itemQty);
    const total = useSelector(state => state.totalPrice);

    const removeFromCart = (itemID) => {
        deleteDoc(doc(db, "cart", itemID)).then(() => {
            dispatch({
                type: 'removeFromCart',
                payload: {
                    id: itemID
                }
            })
            console.log("deleted", itemID);
        })
        // dispatch({
        //     type: 'removeFromCart',
        //     payload: {
        //         id: itemID
        //     }
        // })
        // console.log("deleted", itemID);
    }

    useEffect(() => {
        if (items.length === 0) {
            navigate("/cart/empty")
        }
        // else {
        //     getDocs(cartColl).then(snapshot => {
        //         const cartItemsList = snapshot.docs.map(doc => (
        //             {
        //                 ...doc.data(),
        //                 id: doc.id
        //             }
        //         ));
        //         return cartItemsList;
        //         // setCart(cartItemsList)
        //     }).catch(err => console.log(err))
        // }
    }, [items.length, id])

    return (
        <div className='container mb-5'>
            <div className='col-6'>
                <button className="btn btn-primary" onClick={() => navigate("/menu")}>Go to Menu</button>
            </div>
            <h1 className='text-center'>Cart</h1>
            <div className='col-6'>
                Total : {total} ₹
            </div>

            {
                items.map(item => {
                    console.log(item.id, item);
                    return (
                        <div className='card-group row' key={item.id}>
                            <div className='col-12'>
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
                                                    Quantity : {itemQuantity} units
                                                </small>
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Total : {item.price * itemQuantity} ₹
                                                    </small>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => removeFromCart(item.id)}>
                                                    Remove From Cart
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
            }


        </div>
    )
}


export default Cart;
