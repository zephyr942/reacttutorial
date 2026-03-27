import ListGroup from "./components/ListGroup";
import "./App.css";
import { AiFillApple } from "react-icons/ai";
import { useState } from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import LikeBTN from "./LikeButton/LikeBTN";
import { produce } from "immer";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setCartItem] = useState(["Product 1", "Product 2"]);

  function OnClear() {
    setCartItem([]);
  }

  return (
    <>
      <NavBar cartItemCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={OnClear} />
    </>
  );
}

export default App;
