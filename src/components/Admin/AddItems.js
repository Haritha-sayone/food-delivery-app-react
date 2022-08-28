import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodDataService from "../../firebase/firebase.services";
import { storage } from '../../firebase/config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useUserAuth } from '../../context/UserAuthContext';


const AddItems = () => {
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [img, setImg] = useState(null);
    const [successMsg, setSuccessMsg] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { loggedUser } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(itemName, price, category, img);
        const imageRef = ref(storage, `Images/${img.name}`);
        uploadBytes(imageRef, img).then(snapshot => {
            getDownloadURL(snapshot.ref).then(url => {
                addDoc(collection(db, "items"), {
                    userId: loggedUser.uid,
                    itemName,
                    price,
                    category,
                    img: url
                });
            })
        }).then(() => {
            alert("item added successfully");
            navigate("/items");
        }).catch(err => {
            setError(err.code)
        })

    };

    return (
        <div className='row mx-5 my-5'>
            <h2>Add Items</h2>
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
                            placeholder='0₹'
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
                    <div className="mb-3">
                        <img src={img ? URL.createObjectURL(img) : ''} alt=' ' width={"200px"} height={"200px"} />
                        <input
                            type="file"
                            className="form-control"
                            required
                            onChange={event => setImg(event.target.files[0])}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
            <div className='col-4'></div>
        </div>
    )
}

export default AddItems;
