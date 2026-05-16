import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../Categories/Categories";



const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://your-railway-url.up.railway.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Categories setSelectedCategory={setSelectedCategory} />

      <div className="all-cards">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item._id}
            id={item._id}
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
