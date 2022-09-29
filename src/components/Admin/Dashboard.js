import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className='container'>
            <div className='row text-center'>
                <div className="card text-dark bg-warning mx-2 col-6" style={{ maxWidth: "40%" }}>
                    <div className="card-body">
                        <Link to="/items/add" className="card-text text-center" style={{ textDecoration: "none" }}>ADD ITEMS</Link>
                    </div>
                </div>

                <div className="card text-dark bg-warning mx-2 col-6" style={{ maxWidth: "40%" }}>
                    <div className="card-body">
                        <Link to="/items" className="card-text text-center" style={{ textDecoration: "none" }}>VIEW ITEMS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;