import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";

import RainbowEffectComponent from "./components/RainbowEffectComponent";
import HeartTrailEffectComponent from "./components/HeartTrailEffectComponent";
import BackgroundBlockComponent from "./components/BackgroundBlockComponent";
import ClickAndHoldEffectComponent from "./components/ClickAndHoldEffectComponent";

function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <Route path="/" exact render={() => <RainbowEffectComponent />} />
        <Route
          path="/heart-trail"
          exact
          render={() => <HeartTrailEffectComponent />}
        />
        <Route
          path="/background-block"
          exact
          render={() => <BackgroundBlockComponent />}
        />
        <Route
          path="/click-hold"
          exact
          render={() => <ClickAndHoldEffectComponent />}
        />
      </div>
    </>
  );
}

export default App;
