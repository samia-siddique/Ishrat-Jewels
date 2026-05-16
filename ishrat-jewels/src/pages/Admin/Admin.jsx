import React, { useState, useRef } from "react";
import "./Admin.css";

const Admin = () => {
  const fileRef = useRef();

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

    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("price", productData.price);
    formData.append("image", image);

    const res = await fetch("https://your-railway-url.up.railway.app/productData", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    setProductData({
      title: "",
      price: "",
      image: "",
    });

    setImage(null);

    fileRef.current.value = "";
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
