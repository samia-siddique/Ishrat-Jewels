import React from "react";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Products from "./components/Product/Product";

const App = () => {
  return (
    <div>
      {" "}
      <section id="home">
        <Hero />
      </section>
      <section id="shop">
        <Products />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;
