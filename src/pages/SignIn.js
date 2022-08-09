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
    const { signIn, user } = useUserAuth();
    const [error, setError] = useState("");
    // const [{ user }, dispatch] = useStateValue();

    const login = async (event) => {
        event.preventDefault();
        try {
            await signIn(email, password);
            console.log(user, user.email, user.role);
            // const response = await createUserWithEmailAndPassword(auth, email, password, userRole)
            // alert("User created successfully")
            navigate("/")
            // return response;
        }
        catch (err) {
            setError(err.message)
            // alert(error.message)
        }

        // const login = async (event) => {
        //     event.preventDefault();
        //     try {
        //         const { user: { refreshToken, providerData } } = await signInWithEmailAndPassword(auth, email, password);
        //         dispatch({
        //             type: actionType.SET_USER,
        //             user: providerData[0],
        //         })
        //         console.log(user);
        //         console.log(user.refreshToken);
        //         console.log(user.providerData[0]);
        //         // alert("login successful")
        //         navigate("/")

        //     }
        //     catch (error) {
        //         alert(error.code, error.message)
        //     }

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
                <button type="submit" className="btn btn-primary">Sign In</button>
                <div className="mt-3">
                    New user? <Link to="/signup">Create Account</Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn;