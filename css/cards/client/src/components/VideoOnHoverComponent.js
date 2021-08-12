import React from "react";
import "./VideoOnHoverComponent.scss";

function VideoOnHoverComponent(props) {
  return (
    <div>
      <h1 className="page-title"> Video on Hover Card </h1>
      <div className="video-on-hover-container">
        <div className="card-container">
          <div className="box">
            <div className="card-video">
              <video src="./video1.mp4" muted autoPlay loop></video>
            </div>
            <div className="card-content">
              <div>
                <h2> Video Caption One </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="card-video">
              <video src="./video2.mp4" muted autoPlay loop></video>
            </div>
            <div className="card-content">
              <div>
                <h2> Video Caption Two </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoOnHoverComponent;
