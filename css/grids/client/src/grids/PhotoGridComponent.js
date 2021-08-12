import React from "react";
import "./PhotoGridComponent.css";

const PhotoGridComponent = () => {
  return (
    <div>
      <h1> Photo Grid </h1>
      <div className="photo-grid">
        <div
          className="card card-tall card-wide"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/BDnsD8L.jpg"})`,
          }}
        >
          1
        </div>
        <div
          className="card card-tall"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/6kArx4s.jpg"})`,
          }}
        >
          2
        </div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/g4YShzI.jpg"})`,
          }}
        >
          3
        </div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/QQkdsEa.jpg"})`,
          }}
        >
          4
        </div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/dRpBVjQ.jpg"})`,
          }}
        >
          5
        </div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/X9I21tV.jpg"})`,
          }}
        >
          6
        </div>
        <div
          className="card card-wide"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/haJMz3D.jpg"})`,
          }}
        >
          7
        </div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/L6OsmMK.jpg"})`,
          }}
        >
          8
        </div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/ocpGGxV.jpg"})`,
          }}
        >
          9
        </div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/7qi9Dy3.jpg"})`,
          }}
        >
          10
        </div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/ludezrN.jpg"})`,
          }}
        >
          11
        </div>
        <div
          className="card"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/I7FDL4U.jpg"})`,
          }}
        >
          12
        </div>
      </div>
    </div>
  );
};

export default PhotoGridComponent;
