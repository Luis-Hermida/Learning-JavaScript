import React from "react";
import "./CheckboxesComponent.css";

function CheckboxesComponent(props) {
  return (
    <div>
      <h1> Glowing Checkbox </h1>
      <div className="glowing-section">
        <label>
          <input type="checkbox" name="" />
          <span className="check"></span>
          <span className="btn"></span>
        </label>
        <label>
          <input type="checkbox" name="" defaultChecked={true} />
          <span className="check"></span>
          <span className="btn"></span>
        </label>
      </div>
    </div>
  );
}

export default CheckboxesComponent;
