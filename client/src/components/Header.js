import React from "react";
import buddylogo from "../assets/buddylogo.png";
import carts from "../assets/carts.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
const Header = () => {
  const about = useRef(null);
  const scrollToSec = (e) => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };
  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to="/"
            className="w-40 hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img src={buddylogo} alt="logo" />
          </Link>
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link
            ref={about}
            onClick={() => scrollToSec(about)}
            to="#about"
            className="text-xl"
          >
            About
          </Link>
          <Link to="/menu" className="text-xl">
            Menu
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4 ">
          <Link to="/cart">
            <img className="w-8" src={carts} alt="cart" />
          </Link>
          <Link to="/login">Log In</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
