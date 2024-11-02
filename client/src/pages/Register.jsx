import { React, useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
      <div className="form-box register">
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input
              className="username"
              type="text"
              placeholder="Username"
              required
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <span className="icon">
              <FaUserAlt />
            </span>
          </div>
          <div className="input-box">
            <input
              className="email"
              type="email"
              placeholder="Email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <span className="icon">
              <FaEnvelope />
            </span>
          </div>
          <div className="input-box">
            <input
              className="password"
              type="password"
              placeholder="Password"
              required
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <span className="icon">
              <FaLock />
            </span>
          </div>
          <div className="terms-conditions">
            <label htmlFor="">
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>
          <button type="submit">Create Account</button>
          <div className="login-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}