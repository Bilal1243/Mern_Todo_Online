import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { toast } from "react-toastify";
import { useCreateUserMutation } from "../slices/userApiSlice";
import { useSelector } from "react-redux";

function RegisterPage() {
  const { userInfo } = useSelector((state) => state.auth);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [createUser] = useCreateUserMutation();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      let data = await createUser({ name, email, password }).unwrap();
      toast.success("User Registration Successfull");
      navigate("/login");
    } catch (error) {
      toast.error(error?.message || error?.data?.message);
    }
  };

  useEffect(()=>{
    if(userInfo){
      navigate('/')
    }
  },[])

  return (
    <div className="container">
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={registerHandler}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
