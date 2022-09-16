import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';


const EditItems = () => {
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const docRef = doc(db, "items", id);
        getDoc(docRef).then(doc => {
            console.log(doc.data());
            setItemName(doc.data().itemName);
            setPrice(doc.data().price);
            setCategory(doc.data().category);
        }).catch(err => {
            setError(err.code)
        })

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemRef = doc(db, "items", id);
        updateDoc(itemRef, {
            itemName,
            price,
            category
        }).then(() => {
            alert("item edited successfully");
            navigate("/items")
        }).catch(err => {
            setError(err.code);
        })
    }

    return (
        <div className='row mx-5 my-5'>
            <h2>Edit Items</h2>
            <div className='col-4'></div>
            <div className='col-4'>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="mb-3">
                        <label htmlFor="item name" className="form-label">Item Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Item Name"
                            required
                            value={itemName}
                            onChange={event => setItemName(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder={price}
                            value={price}
                            required
                            onChange={event => setPrice(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Category'
                            required
                            value={category}
                            onChange={event => setCategory(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                </form>
            </div>
            <div className='col-4'></div>
        </div>
    )
}

export default EditItems;
