import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  const validateLogin = () => {
    if (name && password) {
      localStorage.setItem("name", name);
      history.push("/post");
    }
  };

  return (
    <div className="login-container">
      <div className="input-text"> Enter your Name: </div>
      <input
        type="text"
        className="input-box"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="input-text"> Enter a Password: </div>
      <input
        type="password"
        className="input-box"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="login-button" onClick={validateLogin}>
        Login
      </div>
    </div>
  );
};

export default Login;
