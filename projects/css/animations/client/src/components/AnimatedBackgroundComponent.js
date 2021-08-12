import React from "react";
import "./AnimatedBackgroundComponent.scss";

function AnimatedBackgroundComponent(props) {
  return (
    <div>
      <h1 className="page-title"> Animated Background </h1>
      <div className="animated-background">
        <div className="pattern">
          <div className="face face1"></div>
          <div className="face face2"></div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedBackgroundComponent;
