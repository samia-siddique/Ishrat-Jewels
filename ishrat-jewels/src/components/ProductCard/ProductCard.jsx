import React from "react";
import "./ProductCard.css";

const ProductCard = ({ img, name, price }) => {
  const whatsappMessage = `I would like to order from Ishrat Jewels:

Product: ${name}
Price: ${price} PKR`;

  const whatsappURL = `https://wa.me/923333000000?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div className="card">
      <img src={img} alt={name} className="card-img" />

      <div className="card-info">
        <h3>{name}</h3>
        <p className="price">{price} PKR</p>

        <a href={whatsappURL} target="_blank" rel="noreferrer">
          <button className="btn">Order</button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
