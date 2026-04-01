import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const options = ["Groceries", "Utilities", "Entertainment"];

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  amount: z
    .number({ error: "Amount field is required." })
    .min(1, { message: "Amount must be bigger than 0" }),
  category: z.string().refine((val) => options.includes(val), {
    message: "Category is required",
  }),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [items, setItems] = useState([
    {
      description: "Milk",
      amount: 5,
      category: "Groceries",
    },
    { description: "Eggs", amount: 10, category: "Groceries" },
    { description: "Electricity", amount: 100, category: "Utilities" },
  ]);

  const onSubmit = (data: FormData) => {
    setItems([...items, data]);
    console.log(data);
  };

  const onDelete = (selectItem: FormData) =>
    setItems(
      items.filter((item) => item.description !== selectItem.description),
    );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <div className="mb-3">
            <select
              {...register("category")}
              id="category"
              name="category"
              className="btn btn-secondary dropdown-toggle"
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
            {errors.category && (
              <p className="text-danger">{errors.category.message}</p>
            )}
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>

      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
        {items.map((item) => (
          <tr>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button className="btn btn-danger" onClick={() => onDelete(item)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ExpenseTracker;
