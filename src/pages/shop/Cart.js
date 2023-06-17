import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
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
        </>
      )}
    </div>
  );
};

export default Cart;
