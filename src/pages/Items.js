import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';


const Items = () => {
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
            // console.log(doc.id, " => ", doc.data());
        }).catch(err => console.log(err))
    }, []);

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
                        <th scope="col-6">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td scope='row'>{item.id}</td>
                                    <td>
                                        <img src={item.img} width={"100px"} height={"100px"} alt='food' />
                                    </td>
                                    <td>{item.itemName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <button className='btn btn-warning' style={{ marginRight: "5px" }}>Edit</button>
                                        <button className='btn btn-success'>Delete</button>
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
