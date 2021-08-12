import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";

import AnimatedBackgroundComponent from "./components/AnimatedBackgroundComponent";
import AnimatedDivComponent from "./components/AnimatedDivComponent";
import AnimatedGooComponent from "./components/AnimatedGooComponent";
import AnimatedLineComponent from "./components/AnimatedLineComponent";

function App() {
  return (
    <>
      <Navbar>
        <h1 className="title"> Animations </h1>
        <NavItem icon={<CaretIcon />}>
          {/* Dropdown */}
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <div className="content">
        <Route path="/" exact render={() => <AnimatedDivComponent />} />
        <Route
          path="/animated-goo"
          exact
          render={() => <AnimatedGooComponent />}
        />
        <Route
          path="/animated-line"
          exact
          render={() => <AnimatedLineComponent />}
        />
        <Route
          path="/animated-background"
          exact
          render={() => <AnimatedBackgroundComponent />}
        />
      </div>
    </>
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
          <DropdownItem link="/">Animated Div</DropdownItem>
          <DropdownItem link="/animated-goo">Animated Goo</DropdownItem>
          <DropdownItem link="/animated-line">Animated Line</DropdownItem>
          <DropdownItem link="/animated-background">
            Animated Background
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
