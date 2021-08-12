import React, { useEffect, useState } from "react";
import "./AnimatedGooComponent.scss";

function AnimatedGooComponent(props) {
  useEffect(() => {
    let gooey = document.getElementsByClassName("box");
    Array.from(gooey).forEach((element) => {
      element.style.left = Math.floor(Math.random() * 80) + "vw";
      element.style.top = Math.floor(Math.random() * 70) + "vh";
    });

    const intervalAnimation = setInterval(() => {
      Array.from(gooey).forEach((element) => {
        element.style.left = Math.floor(Math.random() * 80) + "vw";
        element.style.top = Math.floor(Math.random() * 70) + "vh";
      });
    }, 2000);

    return () => clearInterval(intervalAnimation);
  }, []);

  return (
    <div>
      <h1 className="page-title"> Animated Goo </h1>
      <div className="animated-goo">{createBoxes()}</div>
    </div>
  );
}

function createBoxes() {
  let boxes = [];

  for (let i = 0; i < 40; i++) {
    boxes.push(<div className="box" key={i}></div>);
  }

  return boxes;
}

export default AnimatedGooComponent;
