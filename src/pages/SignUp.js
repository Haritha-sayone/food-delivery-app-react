import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase/config";
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signUp } = useUserAuth();

    const registerUser = (event) => {
        event.preventDefault();
        signUp(email, password).then(cred => {
            const docRef = doc(db, "users", cred.user.uid);
            setDoc(docRef, {
                email: email,
                password: password,
                id: cred.user.uid,
                role: role
            });
        }).then(() => {
            toast.success("Account created");
            navigate("/signin");
        }).catch(err => {
            setError(err.code);
            toast.error("Error")
        })
    }

    return (
        <div className="row mx-5 my-5">
            <h2>Sign Up</h2>
            <div className="col-4"></div>
            <div className="col-4">
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <form onSubmit={registerUser} autoComplete="off">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputRole1" className="form-label">Role</label>
                        <input
                            type="input"
                            className="form-control"
                            id="exampleRole1"
                            onChange={(event) => setRole(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
            <div className="col-4"></div>
        </div>
    )
}

export default SignUp;