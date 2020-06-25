import React from "react";
import "./App.css";
import Cart from "./Cart.js";

const items = [
  {
    id: 1,
    name: "Kebab",
    price: 4.5,
    qty: 2,
  },
  {
    id: 2,
    name: "Ayran",
    price: 1,
    qty: 3,
  },
  {
    id: 3,
    name: "Taco",
    price: 4,
    qty: 1,
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
