import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";

import ContainedParallaxComponent from "./components/ContainedParallaxComponent";
import FullParallaxComponent from "./components/FullParallaxComponent";

function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <Route path="/" exact render={() => <FullParallaxComponent />} />
        <Route
          path="/contained"
          exact
          render={() => <ContainedParallaxComponent />}
        />
      </div>
    </>
  );
}

export default App;
