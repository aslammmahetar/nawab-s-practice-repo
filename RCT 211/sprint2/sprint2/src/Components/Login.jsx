import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFail,
  loginSuccess,
  loginreq,
} from "../Redux/Authentication/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const auth = useSelector((store) => store.authReducer);
  console.log(auth);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(loginreq());
    let loginData = {
      email,
      password,
    };
    try {
      let req = await axios.post("https://reqres.in/api/login", loginData);
      dispatch(loginSuccess(req.data.token));
    } catch (error) {
      dispatch(loginFail());
    }
  };

  if (auth.isAuth) return navigate("/");

  return (
    <>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="email"
          name=""
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;
