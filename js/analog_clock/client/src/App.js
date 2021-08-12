import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.hr = React.createRef();
    this.mn = React.createRef();
    this.sc = React.createRef();
    this.setTime = this.setTime.bind(this);
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setTime() {
    const deg = 6;

    this.day = new Date();
    this.hh = this.day.getHours() * 30;
    this.mm = this.day.getMinutes() * deg;
    this.ss = this.day.getSeconds() * deg;

    this.hr.current.style.transform = `rotateZ(${this.hh + this.mm / 12}deg)`;
    this.mn.current.style.transform = `rotateZ(${this.mm}deg)`;
    this.sc.current.style.transform = `rotateZ(${this.ss}deg)`;
  }

  render() {
    return (
      <div className="content">
        <div className="clock">
          <div className="hour">
            <div className="hr" id="ht" ref={this.hr}></div>
          </div>
          <div className="min">
            <div className="mn" id="mn" ref={this.mn}></div>
          </div>
          <div className="sec">
            <div className="sc" id="sc" ref={this.sc}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
