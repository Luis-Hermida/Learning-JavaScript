import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="header">
      <nav className="inner-header">
        <div className="logo-container">
          <h1>Parallax Scrolling</h1>
        </div>
        <ul className="navigation">
          <li>
            <Link className="link" to="/">
              Full
            </Link>
          </li>
          <li>
            <Link className="link" to="/contained">
              Contained
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
