import React, { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ items }) {
  const [newitems, setNewItems] = useState(items);

  const updateQty = (id, newQty) => {
    const newItems = newitems.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setNewItems(newItems);
  };

  const grandTotal = newitems
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="Cart">
      <h1 className="Cart-title">
        Shopping Card (to understand easy react fundamentals)
      </h1>
      <div className="Cart-items">
        {newitems.map((item) => (
          <CartItem key={item.id} updateQty={updateQty} {...item} />
        ))}
      </div>
      <h2 className="Cart-total">Grand Total: ${grandTotal}</h2>
    </div>
  );
}

export default Cart;
