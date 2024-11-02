import { React, useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const loginUser = (e) => {
    e.preventDefault();
    axios.get("/");
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form onSubmit={loginUser}>
          <h1>Login</h1>
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
          <div className="remember-forgot">
            <label htmlFor="">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Craving some inspiration? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
