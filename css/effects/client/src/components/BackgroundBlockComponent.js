import React from "react";
import "./BackgroundBlockComponent.css";

class BackgroundBlockComponent extends React.Component {
  handleOnMouseEnter(i) {
    i.target.className = i.target.className + " flip";
  }

  render() {
    const blocks = [];
    for (let i = 0; i < 25; i++) {
      blocks.push(
        <div className="block" key={i} onMouseEnter={this.handleOnMouseEnter}>
          A
        </div>
      );
    }

    return (
      <>
        <div style={{ margin: "16px 10%" }}>
          <h1 style={{ margin: "0px" }}> Background Block Effect </h1>
        </div>
        <div
          className="block-background"
          style={{
            width: "80%",
            margin: "20px auto",
            height: "80vh",
            overflow: "hidden",
            background: "#111",
          }}
        >
          {blocks}
        </div>
      </>
    );
  }
}

export default BackgroundBlockComponent;
