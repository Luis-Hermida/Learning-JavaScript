import React from "react";
import "./AnimatedLineComponent.scss";

function AnimatedLineComponent(props) {
  return (
    <div>
      <h1 className="page-title"> Animated Line </h1>
      <div className="animated-line">
        <svg>
          <path></path>
        </svg>
        <svg>
          <path></path>
        </svg>
      </div>
    </div>
  );
}

export default AnimatedLineComponent;
