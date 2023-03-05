import React from "react";
import { Link } from "react-router-dom";



export default function NavbarComp() {

  return (

    <nav className="navbar navbar-wactch  bg-light fixed-top border-bottom border-secodary border-2 shadow p-2 mb-5 bg-body  ">
      <div className="container-fluid ">
        <a className="navbar-brand fw-bolder text-secondary " href="#">
          Wactch
        </a>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link link-dark fw-semibold">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/stock" className="nav-link link-dark fw-semibold">
              Stock
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/customer" className="nav-link link-dark fw-semibold">
              Customer
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/counter" className="nav-link link-dark fw-semibold">
              Buy
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark fw-semibold">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
