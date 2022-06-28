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
                    <i className="fa fa-th-large me-2 fa-2x"></i>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to="/network"
                  >
                    <i className="fa fa-exchange me-2 fa-2x"></i>
                     Network Exchange Tokens
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to="/chains"
                  >
                    <i
                      className="fa fa-id-card me-2 fa-2x"
                    ></i>
                     Chain IDs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to="/nft"
                  >
                    <i
                      className="fa fa-money me-2 fa-2x"
                    ></i>
                    NFT Transactions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to="/logs"
                  >
                    <i className="fa fa-calendar-o me-2 fa-2x"></i>
                    Log Events
                  </Link>
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
