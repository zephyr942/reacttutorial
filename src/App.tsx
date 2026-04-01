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
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseTracker from "./ExpenseTracker/components/ExpenseTracker";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";

function App() {
  function handleClick() {}

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 5,
      category: "Groceries",
    },
    { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilities" },
  ]);

  // const onDelete = (selectItem: FormData) => {
  //   setExpenses(expenses.filter((expense) => expense.id !== selectItem.id));
  // };

  return (
    <>
      <ExpenseTracker />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
