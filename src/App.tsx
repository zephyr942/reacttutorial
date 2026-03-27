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

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  function handleArray() {
    console.log("bugs", bugs);
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  }

  return (
    <div>
      {feelings}
      <LikeBTN
        likeColor="red"
        likeSize={40}
        onClick={() => {
          handleArray();
        }}
      />
    </div>
  );
}

export default App;
