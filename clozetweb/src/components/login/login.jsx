import React, { useState } from "react";
import './login.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";



const Login = ()=>{
    const [email,setEamil] = useState("");
    const [password,setPassword] = useState("");
    const navgate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
          await signInWithEmailAndPassword(auth,email,password);
          navgate("/home") ;
          console.log("User logged in Successufully");
          toast.success("User logged in Successfully",{
            position:"top-center",
          });
        }
        catch (error){
         console.log(error.message);
         toast.error(error.message,{
            position:"bottom-center"
         });
        }
    }
    return(
        <>
        <div className="login-section">
           <div className="form-login">
            <form onSubmit={handleSubmit}>
                <div className="login-top">
                  <div className="login-heading">
                    <h2>Login Page</h2>
                  </div>
                  </div>
                  <div className="part1">
                <div className="box1">
                <label>Email Address</label>
                </div>
                <div className="box2">
                <input type="email" value={email} onChange={(e)=> setEamil(e.target.value)} placeholder="Enter Your Eamil"/>
                </div>
                </div>
                <div className="part1">
                <div className="box1">
                <label>Password</label>
                </div>
                <div className="box2">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
                </div>
                </div>
                <div className="part2">
                    <button>submit</button>
                </div>
                <div className="already">
                    <p>you don't have account<Link to='/signup'>Signup</Link></p>
                </div>
                
            </form>
           </div>
        </div>
        </>
    )
}
export default Login;