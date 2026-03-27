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
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  function handleClick() {
    // setGame({ ...game, player: { ...game.player, name: "bob" } });

    // immer way
    setGame(
      produce((draft) => {
        const newPlayer = draft.player;
        if (newPlayer) newPlayer.name = "Bob";
      }),
    );

    console.log(game);
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default App;
