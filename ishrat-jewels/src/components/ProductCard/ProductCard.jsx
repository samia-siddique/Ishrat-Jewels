import React from "react";
import "./ProductCard.css";

const ProductCard = ({ img, name, price }) => {
  const API = "https://ishrat-jewels-production.up.railway.app";

  const whatsappMessage = `I would like to order:

Product: ${name}
Price: ${price} PKR`;

  const whatsappURL = `https://wa.me/923333000000?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div className="card">
      <img src={`${API}${img}`} alt={name} />

      <div className="card-info">
        <h3>{name}</h3>
        <p>{price} PKR</p>

        <a href={whatsappURL} target="_blank" rel="noreferrer">
          <button>Order</button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
