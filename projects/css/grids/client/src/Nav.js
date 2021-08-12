import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="header">
      <nav className="inner-header">
        <div className="logo-container">
          <h1>Grids</h1>
        </div>
        <ul className="navigation">
          <li>
            <Link className="link" to="/">
              Basic Grid
            </Link>
          </li>
          <li>
            <Link className="link" to="/photo">
              Photo Grid
            </Link>
          </li>
          <li>
            <Link className="link" to="/animated">
              Animated Grid
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
