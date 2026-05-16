import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin/Admin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};

export default App;
