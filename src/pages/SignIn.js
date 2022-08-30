import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useUserAuth } from "../context/UserAuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";


function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signIn } = useUserAuth();
    // const [{ user }, dispatch] = useStateValue();

    const login = async (event) => {
        event.preventDefault();
        signIn(email, password).then((cred) => {
            const docRef = doc(db, "users", cred.user.uid);
            getDoc(docRef).then((doc) => {
                doc.data().role === "admin" ? navigate("/admin") : navigate("/menu");
            }).catch((err) => {
                console.log("error", err);
            })
        }).catch(err => {
            setError(err.code);
        });
    }

    return (
        <div className="row mx-5 my-5">
            <h2>Login</h2>
            <div className="col-4"></div>
            <div className="col-4">
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
                    <hr />
                    <div className="mt-3">
                        New user? <Link to="/signup">Create Account</Link>
                    </div>
                </form>
            </div>
            <div className="col-4"></div>
        </div>
    )
}

export default SignIn;