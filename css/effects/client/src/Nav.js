import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="header">
      <nav className="inner-header">
        <div className="logo-container">
          <h1> CSS Effects</h1>
        </div>
        <ul className="navigation">
          <li>
            <Link className="link" to="/">
              Rainbow Pixel
            </Link>
          </li>
          <li>
            <Link className="link" to="/heart-trail">
              Heart Trail
            </Link>
          </li>
          <li>
            <Link className="link" to="/background-block">
              Background Block
            </Link>
          </li>
          <li>
            <Link className="link" to="/click-hold">
              Click and Hold
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
