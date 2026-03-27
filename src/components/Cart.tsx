import React from "react";

interface props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem}>{cartItem}</li>
        ))}
      </ul>

      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
