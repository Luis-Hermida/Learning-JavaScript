import React from "react";
import "./HoverPathComponent.scss";

function HoverPathComponent(props) {
  return (
    <div>
      <h1 className="page-title"> Hover Path Card</h1>
      <div className="hover-path-container">
        <div className="card-container">
          <div className="box">
            <div className="image-box">
              <img src="https://i.imgur.com/071Wyti.jpg" alt="card1"></img>
            </div>
            <div className="content-box">
              <h2> Title </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span> Read More </span>
            </div>
          </div>
          <div className="box">
            <div className="image-box">
              <img src="https://i.imgur.com/ayLF7db.jpg" alt="card2"></img>
            </div>
            <div className="content-box">
              <h2> Title </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span> Read More </span>
            </div>
          </div>
          <div className="box">
            <div className="image-box">
              <img src="https://i.imgur.com/xEvpwsA.jpg" alt="card3"></img>
            </div>
            <div className="content-box">
              <h2> Title </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span> Read More </span>
            </div>
          </div>
          <div className="box">
            <div className="image-box">
              <img src="https://i.imgur.com/O2PC7gv.jpg" alt="card4"></img>
            </div>
            <div className="content-box">
              <h2> Title </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span> Read More </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoverPathComponent;
