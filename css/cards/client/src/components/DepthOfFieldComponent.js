import React from "react";
import "./DepthOfFieldComponent.scss";

function DepthOfFieldComponent(props) {
  return (
    <div>
      <h1 className="page-title"> Depth of Field Card </h1>
      <div className="depth-of-field-container">
        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <h2> 1 </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span> Read More </span>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h2> 2 </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span> Read More </span>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h2> 3 </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span> Read More </span>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h2> 4 </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span> Read More </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepthOfFieldComponent;
