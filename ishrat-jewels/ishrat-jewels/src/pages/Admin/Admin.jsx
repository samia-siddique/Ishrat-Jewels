import React, { useState, useRef } from "react";
import "./Admin.css";

const Admin = () => {
  const fileRef = useRef();

  // ✅ ONLY ONE API (IMPORTANT)
  const API = "https://ishrat-jewels-backend-production.up.railway.app";

  const [productData, setProductData] = useState({
    title: "",
    price: "",
  });

  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("price", productData.price);
    formData.append("image", image);

    try {
      const response = await fetch(`${API}/products`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);
      alert("Product Uploaded!");

      // reset
      setProductData({ title: "", price: "" });
      setImage(null);
      fileRef.current.value = null;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin">
      <h1>Admin Panel</h1>

      <input
        value={productData.title}
        onChange={handleChange}
        name="title"
        placeholder="Product Name"
      />

      <input
        value={productData.price}
        onChange={handleChange}
        name="price"
        placeholder="Price"
      />

      <input type="file" onChange={handleImage} ref={fileRef} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Admin;