import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";

import ButtonsComponent from "./components/ButtonsComponent";
import SlidersComponent from "./components/SlidersComponent";
import CheckboxesComponent from "./components/CheckboxesComponent";

function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <Route path="/" exact render={() => <ButtonsComponent />} />
        <Route path="/sliders" exact render={() => <SlidersComponent />} />
        <Route
          path="/checkboxes"
          exact
          render={() => <CheckboxesComponent />}
        />
      </div>
    </>
  );
}

export default App;
