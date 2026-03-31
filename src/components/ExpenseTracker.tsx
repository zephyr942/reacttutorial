import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  amount: z
    .number({ error: "Age field is required." })
    .min(3, { message: "Age must be bigger than 3" }),
  category: z.string().min(1),
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

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
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
            id="category"
            name="categorydd"
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
        </div>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseTracker;
