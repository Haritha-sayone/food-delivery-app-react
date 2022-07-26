import React from "react";

function SignIn() {
    return (
        <div className="mt-5 mx-5 px-5">
            <form>
                <div className={"mb-3 col-6"}>
                    <label htmlFor={"exampleInputEmail1" }className={"form-label"}>Email address</label>
                    <input type={"email"} className={"form-control"} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className={"form-text"}>We'll never share your email with anyone else.</div>
                </div>
                <div className={"mb-3 col-6"}>
                    <label htmlFor={"exampleInputPassword1"} className={"form-label"}>Password</label>
                    <input type={"password"} className={"form-control"} id="exampleInputPassword1" />
                </div>
                <div className={"mb-3 form-check col-6"}>
                    <input type={"checkbox"} className={"form-check-input"} id="exampleCheck1" />
                        <label className={"form-check-label"} htmlFor={"exampleCheck1"}>Check me out</label>
                </div>
                <button type={"submit"} className={"btn btn-primary"}>Login</button>
            </form>
        </div>
    )
}

export default SignIn;