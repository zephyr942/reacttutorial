import ListGroup from "./components/ListGroup";
import "./App.css";
import { AiFillApple } from "react-icons/ai";
import { useState } from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import LikeBTN from "./LikeButton/LikeBTN";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  //practice
  const [drink, setDrink] = useState({
    title: "coffee",
    price: 5,
  });

  function handleDrink() {
    setDrink({ ...drink, price: 6 });
  }

  return (
    <div>
      {drink.price}
      <LikeBTN
        likeColor="red"
        likeSize={40}
        onClick={() => {
          handleDrink();
        }}
      />
    </div>
  );
}

export default App;
