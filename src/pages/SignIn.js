import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useUserAuth } from "../context/UserAuthContext";

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { signIn } = useUserAuth();
    const [error, setError] = useState("");
    // const [{ user }, dispatch] = useStateValue();

    const login = async (event) => {
        event.preventDefault();
        signIn(email, password).then((cred) => {
            // alert("Logged in successfully");
            // console.log(cred.user);
            navigate("/")
        }).catch(err => {
            setError(err.code);
        })
    }

    return (
        <div className="mx-5 my-5">
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <form onSubmit={login} autoComplete="off">
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
                <button type="submit" className="btn btn-primary">LogIn</button>
                <div className="mt-3">
                    New user? <Link to="/signup">Create Account</Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn;