import React, { useState, useEffect, useContext } from "react";
import "./Item.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "../UI/Card";
import { CartContext } from "../../CartContext";

const Item = (props) => {
  const { product_id } = props;
  const [imageUrl, setImageUrl] = useState("");
  const { addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

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
    addToCart({ product_id });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  const handleImageError = (event) => {
    console.log("Error loading image:", event.target.src);
  };

  return (
    <div className="item" key={props.product_id}>
      <Card className="item-card">
        {imageUrl ? (
          <img
            className="item__image"
            src={`data:image;base64,${props.product_image}`}
            onError={handleImageError}
            alt={props.product_name}
          />
        ) : (
          <div>Loading Image...</div>
        )}
        <div className="item__description">
          <h2>{props.product_name}</h2>
          <div className="item__price">${props.product_price}</div>
        </div>
        <div className="fav__buttons">
          <button type="button" onClick={clickHandler}>
            Buy
          </button>
          <button className="favorite__button">
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </Card>
      {showMessage && (
        <div className="message-popup">
          <div className="message-popup__content">
            <i className="fas fa-check-circle"></i>
            <p>Item added to cart!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
