import React, { useState, useEffect, useContext } from "react";
import "./ItemCart.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CartContext } from "../../CartContext";

const ItemCart = (props) => {
  const { product_id } = props;
  const [imageUrl, setImageUrl] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const storedCartItems = localStorage.getItem("cartItems");

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

  const onDelete = () => {
    let filteredItems = JSON.parse(storedCartItems).filter(
      (item) => item.product_id !== product_id
    );

    localStorage.setItem("cartItems", JSON.stringify(filteredItems));
    window.location.reload();
  };

  const handleImageError = (event) => {
    console.log("Error loading image:", event.target.src);
  };

  return (
    <div className="item-cart" key={props.product_id}>
      <div className="item-card-cart">
        <div className="product-info">
          {imageUrl ? (
            <img
              className="item__image-cart"
              src={`data:image;base64,${props.product_image}`}
              onError={handleImageError}
              alt={props.product_name}
            />
          ) : (
            <div>Loading Image...</div>
          )}
          <div className="item__description-cart">
            <h2>{props.product_name}</h2>
            <div className="item__price-cart">${props.product_price}</div>
          </div>
        </div>
        <div className="fav__buttons-cart">
          <button
            className="favorite__button-cart"
            onClick={() => onDelete(product_id)}
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
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

export default ItemCart;
