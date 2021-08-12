import React, { Component } from "react";
import "./FullParallaxComponent.css";

class FullParallaxComponent extends Component {
  constructor(props) {
    super(props);
    this.bg = React.createRef();
    this.moon = React.createRef();
    this.mountain = React.createRef();
    this.road = React.createRef();
    this.text = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    let value = window.scrollY;
    console.log(value);
    this.bg.style.top = value * 0.5 + "px";
    this.moon.style.left = -value * 0.5 + "px";
    this.mountain.style.top = -value * 0.15 + "px";
    this.road.style.top = value * 0.15 + "px";
    this.text.style.top = value * 1 + "px";
  }

  render() {
    return (
      <div>
        <section className="section">
          <img
            ref={this.bg}
            src="https://i.imgur.com/Ney3TuG.jpg"
            id="bg"
            alt="background"
          ></img>
          <img
            ref={this.moon}
            src="https://i.imgur.com/iFkI1Ln.png"
            id="moon"
            alt="moon"
          ></img>
          <img
            ref={this.mountain}
            src="https://i.imgur.com/regtS9l.png"
            id="mountain"
            alt="mountain"
          ></img>
          <img
            ref={this.road}
            src="https://i.imgur.com/bpsF6Qo.png"
            id="road"
            alt="road"
          ></img>
          <h2 ref={this.text} id="text">
            Parallax
          </h2>
        </section>
        <p className="fill-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="fill-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="fill-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

export default FullParallaxComponent;
