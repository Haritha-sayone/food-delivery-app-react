import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SignUp from "./SignUp";

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



function SignIn() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // const formSubmitHandler = () => {
    //     // if user authentication fails, redirect user to signup page,
    //     // else, check if the user's role s admin => AdminHome,
    //     // else, redirect to Menu.js
    //     const auth = getAuth(app);
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         });
    // }

    return (
        <div className="mt-5 mx-5 px-5">
            <form>

                <div className="mb-3 col-6">
                    {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        onChange={event => setLoginEmail(event.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3 col-6">
                    {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={event => setLoginPassword(event.target.value)}
                        placeholder="Password"
                    />
                </div>

                <div className="mb-3 form-check col-6">
                    <label className="form-check-label" htmlFor="exampleCheck1">New User? <Link to="signup" element={<SignUp />} >Register Now</Link></label>
                </div>

                <button type="submit" className="btn btn-primary">Login</button>

            </form>
        </div>
    )
}

export default SignIn;