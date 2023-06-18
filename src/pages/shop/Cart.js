import React, { useState } from "react";
import axios from "axios";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const productIds = cartItems.map((item) => item.product_id);
  const personId = localStorage.getItem("personId");

  const data = {
    address: address,
    postalCode: postalCode,
    city: city,
    country: country,
    productIds: productIds,
    personId: personId,
  };

  console.log(data);

  const checkOut = async () => {
    try {
      const response = await axios.post("http://localhost:3001/order", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Product added successfully", response.data);
      console.log(response);
      localStorage.removeItem("cartItems");
      document.getElementById("shopLink").click();
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.product_id}>
              <h4>{item.product_name}</h4>
              <p>Price: €{item.product_price}</p>
              <p>{item.product_id}</p>
            </div>
          ))}
          <form>
            <div className="address">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>

            <div className="postalCode">
              <label htmlFor="postalCode">postal Code</label>
              <input
                type="text"
                id="postalCode"
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
              />
            </div>

            <div className="city">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>

            <div className="country">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
            </div>
          </form>
          <button onClick={checkOut} className="checkout-btn">
            Check Out
          </button>
        </>
      )}
      <a id="shopLink" href="/shop" style={{ display: "none" }}>
        Shop
      </a>
    </div>
  );
};

export default Cart;
