import React from "react";
import "./BlockRevealComponent.scss";

function BlockRevealComponent(props) {
  return (
    <div>
      <h1 className="page-title"> Block Reveal Card</h1>
      <div className="block-reveal-container">
        <div className="card-container">
          <div className="box">
            <img src="https://i.imgur.com/wCVoJbj.jpg" alt="Card 1"></img>
          </div>
          <div className="box">
            <img src="https://i.imgur.com/mJhro90.jpg" alt="Card 2"></img>
          </div>
          <div className="box">
            <img src="https://i.imgur.com/BWOafrd.jpg" alt="Card 3"></img>
          </div>
          <div className="box">
            <img src="https://i.imgur.com/6Xr4IOn.jpg" alt="Card 4"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockRevealComponent;
