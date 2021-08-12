import React from "react";
import "./AnimatedDivComponent.scss";

function AnimatedDivComponent(props) {
  return (
    <div>
      <h1 className="page-title"> Animated Div </h1>
      <div className="animated-div">
        <div className="square">
          <span></span>
          <span></span>
          <span></span>
          <div className="square-content">
            <h2>Post Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="button">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedDivComponent;
