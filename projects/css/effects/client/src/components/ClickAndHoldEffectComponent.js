import React, { Component } from "react";
import "./ClickAndHoldEffectComponent.css";

class ClickAndHoldEffectComponent extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.cursor = React.createRef();

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.canvas.current.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    this.canvas.current.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove(event) {
    var x = event.clientX,
      y = event.clientY;
    this.cursor.current.style.left = x + "px";
    this.cursor.current.style.top = y + "px";
  }

  render() {
    return (
      <>
        <div style={{ margin: "16px 10%" }}>
          <h1 style={{ margin: "0px" }}> Click and Hold Effect </h1>
        </div>
        <div
          style={{
            width: "80%",
            margin: "20px auto",
            height: "70vh",
            overflow: "hidden",
            background: "#fff",
            border: "1px solid #000",
          }}
        >
          <section className="section" ref={this.canvas}>
            <h2>Title </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis
              dis parturient montes nascetur ridiculus mus mauris vitae.
              Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed
              velit. Parturient montes nascetur ridiculus mus mauris vitae
              ultricies leo. Aliquet sagittis id consectetur purus ut. Commodo
              sed egestas egestas fringilla phasellus faucibus scelerisque. Enim
              praesent elementum facilisis leo vel fringilla est. Tincidunt nunc
              pulvinar sapien et. Sed elementum tempus egestas sed sed risus
              pretium quam. Morbi tincidunt augue interdum velit euismod in
              pellentesque massa placerat. Leo in vitae turpis massa sed. Mauris
              sit amet massa vitae. Quam elementum pulvinar etiam non quam
              lacus. Lobortis scelerisque fermentum dui faucibus in ornare quam.
              Arcu vitae elementum curabitur vitae. Adipiscing bibendum est
              ultricies integer quis auctor elit sed.
            </p>
            <p>
              Accumsan tortor posuere ac ut consequat semper. Et tortor
              consequat id porta nibh venenatis. Ullamcorper velit sed
              ullamcorper morbi tincidunt ornare. Pretium viverra suspendisse
              potenti nullam ac tortor. Maecenas pharetra convallis posuere
              morbi leo urna molestie at. Tempor id eu nisl nunc mi ipsum.
              Consectetur adipiscing elit pellentesque habitant morbi. Congue eu
              consequat ac felis donec et odio pellentesque. Massa sapien
              faucibus et molestie ac feugiat. Magna fringilla urna porttitor
              rhoncus dolor purus non. Tristique risus nec feugiat in fermentum
              posuere. Condimentum lacinia quis vel eros donec ac odio.
              Adipiscing diam donec adipiscing tristique risus nec feugiat in.
              Varius sit amet mattis vulputate enim. Habitant morbi tristique
              senectus et. Potenti nullam ac tortor vitae purus faucibus ornare
              suspendisse sed. Eu nisl nunc mi ipsum. Pretium nibh ipsum
              consequat nisl vel pretium lectus.
            </p>
            <p>
              Aliquam sem fringilla ut morbi tincidunt augue interdum.
              Vestibulum sed arcu non odio euismod lacinia at. Praesent semper
              feugiat nibh sed pulvinar proin gravida hendrerit lectus. Egestas
              sed sed risus pretium quam vulputate. Sit amet consectetur
              adipiscing elit ut aliquam. Condimentum vitae sapien pellentesque
              habitant morbi tristique senectus et netus. Non curabitur gravida
              arcu ac tortor dignissim convallis. Facilisis mauris sit amet
              massa vitae tortor condimentum lacinia quis. Tincidunt arcu non
              sodales neque sodales ut etiam. Facilisi etiam dignissim diam quis
              enim lobortis scelerisque fermentum dui.
            </p>
          </section>
          <div id="cursor" ref={this.cursor}></div>
        </div>
      </>
    );
  }
}

export default ClickAndHoldEffectComponent;
