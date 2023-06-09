import React, { useState } from "react";
import style from "./CSS/login.module.css";
import axios from "axios";

function Login() {
  const [email, setmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginInfo = {
      email,
      pass,
    };
    try {
      let req = await axios.post(
        "http://localhost:1112/users/login",
        loginInfo
      );
      localStorage.setItem("token", req.data.token);
      console.log(req.data);
      alert("Logged in successful");
    } catch (error) {
      alert("wrong credential!!");
      console.log(error);
    }
    setmail("");
    setPass("");
  };

  return (
    <div>
      <h1>Login Form</h1>
      <div className={style.loginform}>
        <form action="" method="post" onSubmit={handleSubmit}>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="pass">Password : </label>
          <input
            type="password"
            value={pass}
            name="pass"
            onChange={(e) => setPass(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
