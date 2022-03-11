import React from 'react'
import {useState} from "react";
import axios from "axios";
// import Swal from "sweetalert2";

const Signup = () => {

    const [emailaddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    function clearInput(){
        setEmailAddress("");
        setUsername("");
        setPassword("");
    }

                    async function userPost()
                {
                    const userDetails = {
                        "username":username,
                        "email":emailaddress,
                        "password":password
                    }
                    
                    
                        const response = await axios.post(`http://localhost:8080/api/v1/users`,userDetails)
                        .then((response)=>{
                            console.log(response);
                            // Swal.fire({
                            //     title: `<strong>${response.data.message}</strong>`,
                            //     icon: 'success',
                            //     showCloseButton: true,
                            //     showCancelButton: true,
                            // })
                        })
                        .catch((error)=>{
                            console.log(error);
                        })

                                // Swal.fire({
                                // title: `<strong>${error.message}</strong>`,
                                // icon: 'error',
                                // showCloseButton: true,
                                // showCancelButton: true,
                                // })});
                        // console.log(response);
            
                    clearInput();
                }

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Sign up With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Sign up With Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput" value={username} onChange={(e) => setUsername(e.target.value)} name="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5"  onClick={userPost}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
