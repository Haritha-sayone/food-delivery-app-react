import React, { useState } from "react";
// import Form from "../components/Form";

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    // const register = async () => {

    // }

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // ..
    //     });

    return (
        <div style={{ marginTop: "10px" }}>
            <h4 style={{ textAlign: "center" }}>SignUp</h4>
            <div className={"signup-form"}>
                <form className={"row g-3 needs-validation"}>

                    {/* <div className={"col-md-6"}>
                        <label htmlFor={"validationServerUsername"} className={"form-label"}>Username</label>
                        <div className="input-group has-validation">
                            <span className={"input-group-text"} id={"inputGroupPrepend3"}>@</span>
                            <input type={"text"} className={"form-control is-invalid"} id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                            <div id="validationServerUsernameFeedback" className={"invalid-feedback"}>
                                Please choose a username.
                            </div>
                        </div>
                    </div> */}

                    <div className="col-md-6">
                        {/* <label htmlFor="validationServer01" className="form-label">Email</label> */}
                        <input
                            type="email"
                            className="form-control is-valid"
                            id="validationServer01"
                            placeholder="Email"
                            onChange={event=>setRegisterEmail(event.target.value)}
                            required
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div className="col-md-6">
                        {/* <label htmlFor="validationServer02" className="form-label">Password</label> */}
                        <input
                            type="password"
                            className="form-control is-valid"
                            id="validationServer02"
                            placeholder="Password"
                            onChange={(event)=>setRegisterPassword(event.target.value)}
                            required
                        />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    {/* <div className={"col-md-6"}>
                        <label htmlFor={"validationServer02"} className={"form-label"}>Phone</label>
                        <input type={"number"} className={"form-control is-valid"} id="validationServer02" required />
                        <div className={"valid-feedback"}>
                            Looks good!
                        </div>
                    </div> */}

                    {/* <div className={"col-6"}>
                    <div className={"form-check"}>
                        <input className={"form-check-input is-invalid"} type={"checkbox"} id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                        <label className={"form-check-label"} htmlFor={"invalidCheck3"}>
                            Agree to terms and conditions
                        </label>
                        <div id="invalidCheck3Feedback" className={"invalid-feedback"}>
                            You must agree before submitting.
                        </div>
                    </div>
                </div> */}

                    <div className="col-6">
                        <button className="btn btn-primary" type="submit">SignUp</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp;