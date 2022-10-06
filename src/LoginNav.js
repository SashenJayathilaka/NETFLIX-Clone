import React, { useEffect, useState } from "react";

function LoginNav() {
  const [show, handleShow] = useState(false);

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
  return <div>LoginNav</div>;
}

export default LoginNav;
