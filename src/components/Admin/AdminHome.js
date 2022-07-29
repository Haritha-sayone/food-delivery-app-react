import React from 'react';

const AdminHome = () => {
    return (
        <div className='container'>
            <div className='row m-5'>
                <div className=" col-4 card text-dark bg-warning mb-3 mx-2 col" style={{ maxWidth: "40%" }}>
                    <div className="card-body">
                        <a className="card-title text-center" style={{textDecoration:"none"}}>Add Items</a>
                    </div>
                </div>

                <div className=" col-4 card text-dark bg-warning mb-3 mx-2 col" style={{ maxWidth: "40%" }}>
                    <div className="card-body">
                        <a className="card-title text-center" style={{textDecoration:"none"}}>View Items</a>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default AdminHome;
