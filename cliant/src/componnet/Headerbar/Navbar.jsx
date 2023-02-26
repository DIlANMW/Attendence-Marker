import React, { useState } from "react";
import Logo from "../Img/OUSL logo.png";
import { Link } from "react-router-dom";
import "../pages/All.css";
import "../pages/Adminside.css";
import Logout from "../Logout/Logout";

const Navbar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <a className="navbar-brand font-weight-bolder" href="/">
        <img
          src={Logo}
          alt="Logo"
          width="36"
          height="36"
          className="vertical-align-middle mx-2"
        />

        <span className="mx-2 fw-bold">Attendance Marker</span>
      </a>

      <div className="form-inline  mx-2 ">
        <div
          className="btn btn-light navbar-toggler"
          onClick={handleNavCollapse}
        >
          <i className="fa fa-bars"></i>
        </div>
      </div>

      <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
        <Link className="nav-link custom-navitem  fw-bold" to="/scanner">
          Scanner
        </Link>
        <Link className="nav-link custom-navitem  fw-bold" to="/">
          Home
        </Link>
        {/* <Link className="nav-link text-info fw-bold" to="/account">
          Account
        </Link> */}

        {/* <button
          type="button"
          class="btn bg-c-pink m-2 custom-btn btn-sm"
          onClick={logOut}
        >
          Log out <i class="fa-solid fa-right-from-bracket"></i>
        </button> */}
        <Logout />
      </div>
    </nav>
  );
};

export default Navbar;
