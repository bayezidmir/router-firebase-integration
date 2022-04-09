import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/reviewss">Reviewss</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;