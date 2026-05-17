import React from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section
        className="hero"
        style={{
          backgroundImage: `url(${assets.hero_img})`,
        }}
      >
        <div className="hero-content">
          <h1>Shine Every Moment</h1>
          <p>Discover pieces made for you</p>
          <a href="#shop" className="hero-btn">
            Shop Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
