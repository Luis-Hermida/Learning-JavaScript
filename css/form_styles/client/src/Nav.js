import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="header">
      <nav className="inner-header">
        <div className="logo-container">
          <h1>Form Styles</h1>
        </div>
        <ul className="navigation">
          <li>
            <Link className="link" to="/">
              Buttons
            </Link>
          </li>
          <li>
            <Link className="link" to="/sliders">
              Sliders
            </Link>
          </li>
          <li>
            <Link className="link" to="/checkboxes">
              Checkboxes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
