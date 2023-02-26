import React, { useState } from "react";
import "../../pages/Adminside.css";
import Logout from "../../Logout/Logout";

const Sidemenu = () => {
  const [isOpen, setIsopen] = useState(false);

  const Sidemenu = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid p-2">
            <a className="navbar-brand text-primary mr-0" href="/">
              Attendance Maker
            </a>
            <div className="form-inline ml-auto">
              <div className="btn btn-secondey" onClick={Sidemenu}>
                <i className="fa fa-bars"></i>
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0 text-primary">Attndance Maker</h4>
            <div className="btn btn-light" onClick={Sidemenu}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <div className="sd-body">
            <li className=" nav-link sd-link custom-navitem  fw-bold" to="">
              Generate Report
            </li>
            <li className="nav-link custom-navitem  fw-bold" to="">
              Help
            </li>
          </div>
          <Logout />
        </div>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={Sidemenu}
        ></div>
      </div>
    </>
  );
};

export default Sidemenu;
