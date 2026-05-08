import React from "react";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <div>
      {" "}
      <section id="home">
        <Hero />
      </section>
      <section id="shop">
        <Product />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;
