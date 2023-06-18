import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cart.css";
import ItemContainerCart from "../../components/items/ItemContainerCart";

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState([]);
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

  const getProducts = async () => {
    try {
      const requests = productIds.map(async (productId) => {
        const res = await axios.get(
          `http://localhost:3001/products-by-id/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        return res.data.product;
      });

      const products = await Promise.all(requests);
      setItems(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const checkOut = async () => {
    try {
      const response = await axios.post("http://localhost:3001/order", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Product added successfully", response.data);
      localStorage.removeItem("cartItems");
      document.getElementById("shopLink").click();
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div>
          <h2>Shopping Cart</h2>
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          {items ? <ItemContainerCart products={items} /> : <p>Loading...</p>}

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
              <label htmlFor="postalCode">Postal Code</label>
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
