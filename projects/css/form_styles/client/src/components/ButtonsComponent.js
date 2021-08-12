import React from "react";
import "./ButtonsComponent.css";

class ButtonsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.rippleButton = React.createRef();
    this.addRipple = this.addRipple.bind(this);
  }

  addRipple(e) {
    let ripples = document.createElement("span");
    ripples.style.left = e.clientX - e.target.offsetLeft + "px";
    ripples.style.top = e.clientY - e.target.offsetTop + "px";
    this.rippleButton.current.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1> Liquid Button </h1>
        <div className="liquid-section">
          <a href="/#">
            <span> Button </span>
            <div className="liquid"></div>
          </a>
        </div>
        <h1> Ripple Button </h1>
        <div className="ripple-section">
          <a href="/#" onClick={this.addRipple} ref={this.rippleButton}>
            Button
          </a>
        </div>
      </div>
    );
  }
}

export default ButtonsComponent;
