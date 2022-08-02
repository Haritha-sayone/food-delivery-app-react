import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import app from "../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            alert("login successful")
            navigate("/")
            console.log(response);
        }
        catch (error) {
            alert(error.code,error.message)
        }

        //     .then(response => {
        //         console.log(response);
        //         alert("login successful")
        //         navigate("/")
        //     }
        //     ).catch(error => alert(error.message));
        // return response;
    }

    return (
        <div className="mx-5 my-5">
            <form onSubmit={login}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
                <div className="mt-3">
                    New response? <Link to="/signup">Create Account</Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn;