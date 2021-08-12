import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./styles/base.css";
import Nav from "./Nav";

import AnimatedGridComponent from "./grids/AnimatedGridComponent";
import PhotoGridComponent from "./grids/PhotoGridComponent";
import BasicGridComponent from "./grids/BasicGridComponent";

function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <Route path="/" exact render={() => <BasicGridComponent />} />
        <Route path="/photo" exact render={() => <PhotoGridComponent />} />
        <Route
          path="/animated"
          exact
          render={() => <AnimatedGridComponent />}
        />
      </div>
    </>
  );
}

export default App;
