import React, { useState, useRef } from "react";
import "./Admin.css";

const Admin = () => {
  const fileRef = useRef();
  const API = "https://your-railway-url.up.railway.app";

  const [productData, setProductData] = useState({
    title: "",
    price: "",
    image: "",
  });
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("BUTTON CLICKED");

    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("price", productData.price);
    formData.append("image", image);

    try {
    const response = await fetch(`${API}/productData`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);

      alert("Product Uploaded!");
    } catch (error) {
      console.log(error);
    }
    console.log("clicked");
  };

  return (
    <div className="admin">
      <h1>Admin Panel</h1>

      <div className="right-bar">
        <h3>Upload Product</h3>
        <input
          value={productData.title}
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Enter Product Name"
        ></input>

        <input
          value={productData.price}
          onChange={handleChange}
          name="price"
          type="number"
          placeholder="Enter Price"
        ></input>

        <input type="file" name="image" onChange={handleImage} ref={fileRef} />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Admin;
