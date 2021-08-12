import React from "react";
import "./ProductCardComponent.scss";

function ProductCardComponent(props) {
  return (
    <div>
      <h1 className="page-title"> Product Card </h1>
      <div className="product-card-container">
        <div className="card-container">
          <div className="card">
            <div className="card-image">
              <img src="https://i.imgur.com/9jCrkJh.png" alt="Product shoes" />
            </div>
            <div className="card-content">
              <h2> Nike Shoes </h2>
              <div className="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="button"> Buy Now </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardComponent;
