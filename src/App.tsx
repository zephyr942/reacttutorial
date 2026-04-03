import { useState } from "react";
import "./App.css";
import Practice from "./components/practice";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");
  useState;
  return (
    <>
      <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </>
  );
}

export default App;
