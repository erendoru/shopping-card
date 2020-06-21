import React from "react";

function Cart({ initialItems }) {
  return (
    <div>
      <h1>sa</h1>
      <ul>
        {initialItems.map((item) => (
          <li>
            Name:{item.name},Price: {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
