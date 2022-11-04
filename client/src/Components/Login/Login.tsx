import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [account, setAccount] = useState({});

  const handleLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(typeof e);
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    console.log("@1@", account);
  };

  const handleLogin = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};

  return (
    <div>
      <div>
        <div className={styles.loginTitle}>
          <h1>Login</h1>
        </div>
        <div className={styles.loginSubtitle}>
          <p>Eres nuevo? </p>
          <Link to="/register">
            <p> Registrate</p>
          </Link>
        </div>
        <div className={styles.loginForm}>
          <form>
            <label>Email</label>
            <input name="email" onChange={(e) => handleLoginData(e)} />
            <label>Contraseña</label>
            <input name="password" onChange={(e) => handleLoginData(e)} />
          </form>
        </div>
        <div>
          <button onClick={(e) => handleLogin(e)}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
