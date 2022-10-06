import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      //window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__blank"}`}>
      <Link to="/">
        <img
          className="nav__logo"
          src="https://i.postimg.cc/CxTS5Pcw/pngwing-com-2.png"
          alt="Netflix Logo"
        />
      </Link>
      <Link to="/">
        <img className="nav__avatar" src={user?.photoURL} alt="Netflix Logo" />
      </Link>
    </div>
  );
};

export default Nav;
