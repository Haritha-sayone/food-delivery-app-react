import React, { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const { signUp,user } = useUserAuth();
    const [error, setError] = useState("");

    const registerUser = async (event) => {
        event.preventDefault();
        try {
            await signUp(email, password, role);
            console.log(user.email,user.password,user.role);
            // const response = await createUserWithEmailAndPassword(auth, email, password, userRole)
            // alert("User created successfully")
            navigate("/signin")
            // return response;
        }
        catch (err) {
            setError(err.message)
            // alert(error.message)
        }
        // .then(response => {
        //     console.log(response)
        //     alert("account created successfully");
        //     navigate("/signin");
        // })
        // .catch(error => console.log(error))
    }

    return (
        <div className="mx-5 my-5">
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <form onSubmit={registerUser}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputRole1" className="form-label">Role</label>
                    <input
                        type="input"
                        className="form-control"
                        id="exampleRole1"
                        onChange={(event) => setRole(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;