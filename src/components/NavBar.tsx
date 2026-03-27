import React from "react";

interface props {
  cartItemCount: number;
}

export default function NavBar({ cartItemCount }: props) {
  return <div>NavBar: {cartItemCount}</div>;
}
