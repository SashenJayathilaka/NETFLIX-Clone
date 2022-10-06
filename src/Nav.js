import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Nav.css";

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

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className={`nav ${show && "nav__blank"}`}>
      <Link to="/">
        <img
          className="nav__logo"
          src="https://i.postimg.cc/CxTS5Pcw/pngwing-com-2.png"
          alt="Netflix Logo"
        />
      </Link>

      {user ? (
        <img
          className="nav__avatar"
          src={user?.photoURL}
          alt="Netflix Logo"
          onClick={logout}
        />
      ) : (
        <Link to="/login">
          <img
            className="nav__avatar"
            src="https://th.bing.com/th/id/R.f2dd56b582c03d5075f3d86eee908fde?rik=sp31UshLUyTyXA&pid=ImgRaw&r=0"
            alt="Netflix Logo"
          />
        </Link>
      )}
    </div>
  );
};

export default Nav;
