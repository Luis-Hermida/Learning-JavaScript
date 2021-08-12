import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";

import BlockRevealComponent from "./components/BlockRevealComponent";
import DepthOfFieldComponent from "./components/DepthOfFieldComponent";
import HoverPathComponent from "./components/HoverPathComponent";
import ProductCardComponent from "./components/ProductCardComponent";
import VideoOnHoverComponent from "./components/VideoOnHoverComponent";

function App() {
  return (
    <Router>
      <Navbar>
        <h1 className="title"> Cards </h1>
        <NavItem icon={<CaretIcon />}>
          {/* Dropdown */}
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <div className="content">
        <Route path="/" exact render={() => <HoverPathComponent />} />
        <Route
          path="/depth-of-field"
          exact
          render={() => <DepthOfFieldComponent />}
        />
        <Route
          path="/block-reveal"
          exact
          render={() => <BlockRevealComponent />}
        />
        <Route
          path="/video-on-hover"
          exact
          render={() => <VideoOnHoverComponent />}
        />
        <Route
          path="/product-card"
          exact
          render={() => <ProductCardComponent />}
        />
      </div>
    </Router>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <p className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </p>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calculateHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <Link to={props.link} className="menu-item">
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      {/* Main dropdown */}
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropdownItem link="/">Hover Path</DropdownItem>
          <DropdownItem link="/depth-of-field">Depth of Field</DropdownItem>
          <DropdownItem link="/block-reveal">Block Reveal</DropdownItem>
          <DropdownItem link="/video-on-hover">Video on Hover</DropdownItem>
          <DropdownItem link="/product-card">Product Card</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
