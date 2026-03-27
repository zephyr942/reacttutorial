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
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  function handleClick() {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 2 ? { ...item, quantity: 2 } : item,
      ),
    });

    // immer way
    // setPizza(
    //   produce((draft) => {
    //     const newPizza = draft.name === "Spicy Pepperoni" ? draft : null;
    //     if (newPizza) newPizza.toppings = [...newPizza.toppings, "Cheese"];
    //   }),
    // );

    console.log(cart);
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default App;
