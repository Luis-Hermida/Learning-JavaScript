import React, { Component } from "react";
import "./HeartTrailEffectComponent.css";

class HeartTrailEffectComponent extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef(null);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.wait = false;
    this.interval = null;
  }

  componentDidMount() {
    this.canvas.current.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    this.canvas.current.removeEventListener("mousemove", this.handleMouseMove);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleMouseMove(event) {
    if (this.getRandomInt(5) === 0) {
      var body = this.canvas;
      var heart = document.createElement("span");
      var x = event.offsetX;
      var y = event.offsetY;

      heart.style.left = x + "px";
      heart.style.top = y + "px";
      var size = Math.random() * 50;
      heart.style.width = 20 + size + "px";
      heart.style.height = 20 + size + "px";

      body.current.appendChild(heart);

      setTimeout(function () {
        heart.remove();
      }, 1000);
    }
  }

  render() {
    return (
      <div>
        <div style={{ margin: "16px 10%" }}>
          <h1 style={{ margin: "0px" }}>Heart Trail Effect</h1>
        </div>
        <div
          ref={this.canvas}
          style={{
            width: "80%",
            margin: "20px auto",
            height: "70vh",
            overflow: "hidden",
            background: "#111",
            position: "relative",
          }}
        ></div>
      </div>
    );
  }
}

export default HeartTrailEffectComponent;
