import React from "react";
import "./Categories.css";
import { assets } from "../../assets/assets";

const Categories = ({ setSelectedCategory }) => {
  return (
    <div className="ctg">
      <h1>Categories</h1>

      <div className="ctg-list">
        {" "}
        <div onClick={() => setSelectedCategory("All")}>
          <img src={assets.all} alt="Show All" />
          <p>Show All</p>
        </div>
        <div onClick={() => setSelectedCategory("Bangles")}>
          <img src={assets.bangles} alt="Bangles" />
          <p>Bangles</p>
        </div>
        <div onClick={() => setSelectedCategory("Jhumkas")}>
          <img src={assets.jhumkas} alt="Jhumkas" />
          <p>Jhumkas</p>
        </div>
        <div onClick={() => setSelectedCategory("Hand Cuffs")}>
          <img src={assets.handcuff} alt="Hand Cuffs" />
          <p>Hand Cuffs</p>
        </div>
        <div onClick={() => setSelectedCategory("Bracelets")}>
          <img src={assets.bracelets} alt="Bracelets" />
          <p>Bracelets</p>
        </div>
        <div onClick={() => setSelectedCategory("Rings")}>
          <img src={assets.rings} alt="Rings" />
          <p>Rings</p>
        </div>
        <div onClick={() => setSelectedCategory("Pendants")}>
          <img src={assets.pendant} alt="Pendants" />
          <p>Pendants</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
