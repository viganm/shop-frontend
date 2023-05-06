import React, { useState } from "react";
import axios from "axios";
import "./AddProductsForm.css";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategoryId, setProductCategoryId] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // convert image file to bytea
    const reader = new FileReader();
    reader.readAsArrayBuffer(productImage);
    reader.onload = () => {
      const bytea = new Uint8Array(reader.result);

      console.log(typeof readAsArrayBuffer);
      // create data object to send to server
      const data = {
        productName: productName,
        productPrice: productPrice,
        productCategoryId: productCategoryId,
        productImage: bytea,
      };

      axios
        .post("http://localhost:3001/product", data)
        .then((response) => {
          console.log("Product added successfully", response.data);
          console.log(response);
        })
        .catch((error) => {
          console.error("Error adding product", error);
        });
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productPrice">Product Price</label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productCategoryId">Product Category ID</label>
        <input
          type="text"
          id="productCategoryId"
          value={productCategoryId}
          onChange={(event) => setProductCategoryId(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productImage">Product Image</label>
        <input
          type="file"
          id="productImage"
          accept="image/*"
          onChange={(event) => setProductImage(event.target.files[0])}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
