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
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/components/ExpenseForm";
import categories from "./ExpenseTracker/categories";

function App() {
  function handleClick() {}

  const [selectedCategory, setSelectedCatgory] = useState("");
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

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  // const onDelete = (selectItem: FormData) => {
  //   setExpenses(expenses.filter((expense) => expense.id !== selectItem.id));
  // };

  return (
    <>
      <div className="mb-3">
        <ExpenseForm
          submitExpense={(expense) => {
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
          }}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCatgory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
