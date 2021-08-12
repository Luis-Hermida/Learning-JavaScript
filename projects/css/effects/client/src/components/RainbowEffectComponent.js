import React from "react";
import "./RainbowEffectComponent.css";

function RainbowEffectComponent(props) {
  return (
    <>
      <div style={{ margin: "16px 10%" }}>
        <h1 style={{ margin: "0px" }}> Rainbow Pixel Effect </h1>
      </div>
      <div
        style={{
          width: "80%",
          margin: "20px auto",
          height: "49vh",
          overflow: "hidden",
          background: "#111",
        }}
      >
        <CreateBoxes />
      </div>
    </>
  );
}

function CreateBoxes() {
  return Array.from(Array(1200), (e, i) => {
    return <div key={i} className="box"></div>;
  });
}

export default RainbowEffectComponent;
