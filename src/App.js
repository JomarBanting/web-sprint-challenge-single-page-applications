import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Order from "./pizza-form";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link>
        <Link id="order-pizza" to="/pizza">Order Pizza!</Link>
      </nav>
      <h1>Pizza App</h1>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/pizza" element={<Order/>} />
      </Routes>
    </div>
  );
};
export default App;
