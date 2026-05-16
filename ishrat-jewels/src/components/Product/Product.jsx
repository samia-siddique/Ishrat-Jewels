import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../Categories/Categories";

const products = [
  {
    img: "/jellybangle9.jpeg",
    name: "Jelly Bangle",
    price: 400,
    category: "Bangles",
  },
  {
    img: "/jellybangles1.jpeg",
    name: "Jelly Bangle",
    price: 400,
    category: "Bangles",
  },
  {
    img: "/jellybangle2.jpeg",
    name: "Jelly Bangle",
    price: 400,
    category: "Bangles",
  },
  {
    img: "/handcuff2.jpeg",
    name: "Hand Cuff",
    price: 1150,
    category: "Hand Cuffs",
  },
  {
    img: "/jellybangle3.jpeg",
    name: "Jelly Bangle",
    price: 400,
    category: "Bangles",
  },
  {
    img: "/jellybangle4.jpeg",
    name: "Jelly Bangle",
    price: 400,
    category: "Bangles",
  },
  {
    img: "/jellybangle5.jpeg",
    name: "Jelly Bangle",
    price: 400,
    category: "Bangles",
  },
  {
    img: "/handcuff1.jpeg",
    name: "Hand Cuff",
    price: 1150,
    category: "Hand Cuffs",
  },
  {
    img: "/jellybangle6.jpeg",
    name: "Jelly Bangle",
    price: 400,
    category: "Bangles",
  },
  {
    img: "/jellybangle7.jpeg",
    name: "Jelly Bangle",
    price: 400,
    category: "Bangles",
  },
  {
    img: "/jellybangle8.jpeg",
    name: "Jelly Bangle",
    price: 400,
    category: "Bangles",
  },
  {
    img: "/jellybangle10.jpeg",
    name: "Jelly Bangle",
    price: 400,
    category: "Bangles",
  },
  {
    img: "/jhumka51.jpeg",
    name: "Jhumka",
    price: 799,
    category: "Jhumkas",
  },
  {
    img: "/jhumka52.jpeg",
    name: "Jhumka",
    price: 399,
    category: "Jhumkas",
  },
  {
    img: "/jhumka53.jpeg",
    name: "Jhumka",
    price: 550,
    category: "Jhumkas",
  },
  {
    img: "/jhumka41.jpeg",
    name: "Jhumka",
    price: 499,
    category: "Jhumkas",
  },

  {
    img: "/jhumka42.jpeg",
    name: "Jhumka",
    price: 799,
    category: "Jhumkas",
  },
  {
    img: "/jhumka43.jpeg",
    name: "Jhumka",
    price: 450,
    category: "Jhumkas",
  },
  {
    img: "/jhumka44.jpeg",
    name: "Jhumka",
    price: 450,
    category: "Jhumkas",
  },
  {
    img: "/jhumka45.jpeg",
    name: "Jhumka",
    price: 450,
    category: "Jhumkas",
  },
  {
    img: "/jhumka46.jpeg",
    name: "Jhumka",
    price: 399,
    category: "Jhumkas",
  },

  {
    img: "/jhumka21.jpeg",
    name: "Jhumka",
    price: 250,
    category: "Jhumkas",
  },

  {
    img: "/jhumka22.jpeg",
    name: "Jhumka",
    price: 250,
    category: "Jhumkas",
  },
];

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/products")
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
