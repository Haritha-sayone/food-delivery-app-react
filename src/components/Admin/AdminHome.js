import React from 'react';
import { Link } from 'react-router-dom';


const AdminHome = () => {
    return (
        <div className='container'>
            <div className='row m-5'>
                <div className=" col-4 card text-dark bg-warning mb-3 mx-2 col" style={{ maxWidth: "40%" }}>
                    <div className="card-body">
                        <Link to="/items/add" className="card-title text-center" style={{textDecoration:"none"}}>Add Items</Link>
                    </div>
                </div>

                <div className=" col-4 card text-dark bg-warning mb-3 mx-2 col" style={{ maxWidth: "40%" }}>
                    <div className="card-body">
                        <Link to="/items" className="card-title text-center" style={{textDecoration:"none"}}>View Items</Link>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default AdminHome;
