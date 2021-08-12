import React, { useState, useEffect } from "react";
import "./SlidersComponent.css";

function SlidersComponent(props) {
  const [backgroundSliderValue, setBackgroundSliderValue] = useState(0);

  return (
    <div>
      <h1> Background Slider </h1>
      <div className="background-slider">
        <h2 id="range-value"> {backgroundSliderValue}%</h2>
        <div
          id="fill-range-value"
          style={{
            width: backgroundSliderValue + "%",
            borderBottomRightRadius:
              backgroundSliderValue < 97 ? "0px" : "10px",
            borderTopRightRadius: backgroundSliderValue < 95 ? "0px" : "10px",
          }}
        >
          {" "}
        </div>
        <input
          type="range"
          className="range"
          name=""
          value={backgroundSliderValue}
          onChange={(e) => {
            setBackgroundSliderValue(e.target.value);
          }}
          min="0"
          max="100"
        />
      </div>
    </div>
  );
}

export default SlidersComponent;
