import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../Categories/Categories";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory] = useState("All");

  const API = "https://ishrat-jewels-production.up.railway.app";

  useEffect(() => {
    fetch(`${API}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Categories />

      <div className="all-cards">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            img={item.image}
            name={item.title}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
