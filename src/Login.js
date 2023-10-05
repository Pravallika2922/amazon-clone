import React, { useState } from "react";
import "./Login.css";
import { Link} from "react-router-dom";
import {auth} from "./firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
auth.signInWithEmailAndPassword(email,password).then((auth)=>{
  navigate("/");
})
.catch((error)=>alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      if(auth){
       navigate("/");
      }
    })
    .catch(error=>alert(error.message));
  };
  
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
          className="login_logo"
          alt="amazon-logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form action="" className="login_form">
          <input
            type="email"
            placeholder="Email"
            className="login_control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login_control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signinbtn" onClick={signIn}>
            Sign in
          </button>

          <p>By signing in you agree to the AMAZON CLONE conditons</p>
        </form>
        <button className="login_registerbtn" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
