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
                    <i className="fas fa-th-large fa-2x"></i>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to="/network"
                  >
                    <i className="fas fa-briefcase fa-2x"></i>
                    Network Exchange Tokens
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/chains">
                    <i className="fas fa-folder fa-2x"></i>
                    Chain IDs
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center" href="/">
                    <i className="far fa-chart-bar fa-2x"></i>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center" href="/">
                    <i className="far fa-chart-bar fa-2x"></i>
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
