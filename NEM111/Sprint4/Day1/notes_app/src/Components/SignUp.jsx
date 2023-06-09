import React, { useState } from "react";
import style from "./CSS/login.module.css";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [name, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      pass,
      name,
    };
    try {
      let req = await axios.post(
        "https://puce-zany-fox.cyclic.app/users/register",
        userInfo
      );
      console.log(req);
    } catch (error) {
      console.log(error);
    }
    console.log("I am form and i am working");
    setEmail("");
    setUserName("");
    setPassword("");
    console.log(userInfo);
  };

  return (
    <div>
      <div>
        <h1>Sign Up Form</h1>
        <div className={style.loginform}>
          <form action="" method="post" onSubmit={handleSubmit}>
            <br />
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="email">Password : </label>
            <input
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
