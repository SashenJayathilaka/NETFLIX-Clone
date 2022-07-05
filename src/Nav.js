import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {

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

    return (
        <div className={`nav ${show && "nav__blank"}`}>
            <img
                className='nav__logo'
                src='https://i.postimg.cc/CxTS5Pcw/pngwing-com-2.png'
                alt='Netflix Logo' />

            <img
                className='nav__avatar'
                src="https://i.postimg.cc/wT2wP3nL/pngwing-com-3.png"
                alt='Netflix Logo'
            />
        </div>
    )
}

export default Nav