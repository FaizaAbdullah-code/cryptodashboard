import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block sidebar collapse"
          >
            <div className="position-sticky pt-4">
              <ul className="nav flex-column" id="nav_accordion">
                
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center active"
                    to="/"
                  >
                    <i className="fas fa-th-large" style={{fontSize:"25px"}}></i>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to="/network"
                  >
                    <i className="fa fa-exchange me-3 ms-2" style={{fontSize:"25px"}} aria-hidden="true"></i>
                     Network Exchange Tokens
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/chains">
                  <i className="fa fa-id-card me-3 ms-2" style={{fontSize:"20px"}} aria-hidden="true"></i>
                    Chain IDs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/about">
                  <i className="fa fa-info-circle me-3 ms-2" style={{fontSize:"25px"}} aria-hidden="true"></i>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center" href="/">
                  <i className="fa-thin fa-circle-info"></i>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
