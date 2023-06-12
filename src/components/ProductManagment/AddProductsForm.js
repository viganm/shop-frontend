import React, { useState } from "react";
import axios from "axios";
import "./AddProductsForm.css";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategoryId, setProductCategoryId] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // convert image file to base64
    const reader = new FileReader();
    reader.readAsDataURL(productImage);
    reader.onload = async () => {
      const base64Image = reader.result.split(",")[1]; // extract base64 data from the result

      // create data object to send to server
      const data = {
        productName: productName,
        productPrice: productPrice,
        productCategoryId: productCategoryId,
        productImage: base64Image,
      };

      try {
        const response = await axios.post(
          "http://localhost:3001/product",
          data,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Product added successfully", response.data);
        console.log(response);
      } catch (error) {
        console.error("Error adding product", error);
      }
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
