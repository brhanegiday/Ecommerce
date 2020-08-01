import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm sticky-top px-sm-5 nav-dark bg-dark">
        <Link to="/" className="brand bg-dark">
          <img
            src={logo}
            alt="Store Logo"
            className="navbar-brand ml-5 mr-2 rounded-circle"
            width="50"
            height="50"
          />
          NorthMart
        </Link>
        <ul className="navbar-nav  align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center ml-auto ">
          <button className="cart nav-item mr-5 bg-dark">
            <Link to="/cart" className="nav-link text-white ">
              My Cart
            </Link>
          </button>
        </ul>
      </nav>
    );
  }
}
