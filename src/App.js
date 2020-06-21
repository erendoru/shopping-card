import React from "react";
import "./App.css";
import Cart from "./Cart.js";

const items = [
  {
    id: 1,
    name: "Kebab",
    price: 4.5,
    qty: 25,
  },
  {
    id: 2,
    name: "Ayran",
    price: 1,
    qty: 12,
  },
  {
    id: 3,
    name: "Taco",
    price: 4,
    qty: 10,
  },
];

function App() {
  return (
    <div className="App">
      <Cart items={items} />
    </div>
  );
}

export default App;
