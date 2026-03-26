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
  // const [drink, setDrink] = useState({
  //   title: "coffee",
  //   price: 5,
  // });

  const [feelings, setFeeling] = useState(["happy", "Sadness", "Anger"]);

  function handleClick() {
    //updating
    setFeeling([...feelings, "lonely"]);

    //remove
    setFeeling(feelings.filter((feeling) => feeling !== "happy"));

    //replacement
    setFeeling(
      feelings.map((feeling) => (feeling === "happy" ? "happiness" : feeling)),
    );
  }

  return (
    <div>
      {feelings}
      <LikeBTN
        likeColor="red"
        likeSize={40}
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
}

export default App;
