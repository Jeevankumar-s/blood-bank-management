import React from "react";
import { Link } from "react-router-dom";

import userLogin from "../user/userLogin";
import employeeLogin from "../employee/employeeLogin";

import "../../assets/navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav.nav-wrapper grey darken -3">
      <div className="container">
        <Link to="/" className="bbms">
          BBMS
        </Link>
        <userLogin />
        <employeeLogin />
      </div>
    </nav>
  );
};

export default Navbar;
