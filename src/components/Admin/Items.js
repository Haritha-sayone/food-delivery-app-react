import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';


const Items = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

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

    const handleEdit = (id) => {
        navigate(`/items/edit/${id}`)
    }

    const handleDelete = (id) => {
        deleteDoc(doc(db, "items", id));
        console.log("deleted", id);
    }

    return (
        <div>
            <h2>Items</h2>
            <table className='table'>

                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>
                                        <img src={item.img} width={"100px"} height={"100px"} alt='food' />
                                    </td>
                                    <td>{item.itemName}</td>
                                    <td>{item.price}₹</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <button className='btn btn-success' style={{ marginRight: "5px" }} onClick={() => handleEdit(item.id)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Items;
