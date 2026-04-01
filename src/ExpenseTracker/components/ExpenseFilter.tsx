import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="" disabled selected hidden>
        -- Select an option --
      </option>
      <option value="Groceries" className="dropdown-item">
        Groceries
      </option>
      <option value="Utilities" className="dropdown-item">
        Utilities
      </option>
      <option value="Entertainment" className="dropdown-item">
        Entertainment
      </option>
    </select>
  );
};

export default ExpenseFilter;
