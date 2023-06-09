import React from "react";
import { Link } from "react-router-dom";
import style from "./CSS/navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbar}>
      <h2>
        <Link to={"/login"} className={style.link}>
          Login
        </Link>
      </h2>
      <h2>
        <Link to={"/signup"} className={style.link}>
          Sign Up
        </Link>
      </h2>
      <h2>
        <Link to={"/addnotes"} className={style.link}>
          Add Notes
        </Link>
      </h2>
      <h2>
        <Link to={"/notes"} className={style.link}>
          All Notes
        </Link>
      </h2>
    </div>
  );
}

export default Navbar;
