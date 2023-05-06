import React, { useState, useEffect } from "react";
import "./Item.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "../UI/Card";

const Item = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!props.product_image) {
      return;
    }

    const imageData = props.product_image.data;
    const blob = new Blob([new Uint8Array(imageData)], {
      type: "image/jpg",
    });

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(blob);
  }, [props.product_image]);

  const clickHandler = () => {
    console.log("BUY");
  };

  const handleImageError = (event) => {
    console.log("Error loading image:", event.target.src);
  };

  return (
    <div className="item" key={props.product_id}>
      <Card className="item-card">
        <div className="item__description">
          <h2>{props.product_name}</h2>
          <div className="item__price">${props.product_price}</div>
        </div>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={props.product_name}
            onError={handleImageError}
          />
        ) : (
          <div>No image...</div>
        )}
        <div className="fav__buttons">
          <button onClick={clickHandler}>Buy</button>
          <button onClick={clickHandler} className="favorite__button">
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Item;
