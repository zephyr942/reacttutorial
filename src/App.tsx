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
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  function handleClick() {
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });

    // immer way
    setPizza(
      produce((draft) => {
        const newPizza = draft.name === "Spicy Pepperoni" ? draft : null;
        if (newPizza) newPizza.toppings = [...newPizza.toppings, "Cheese"];
      }),
    );

    console.log(pizza);
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default App;
