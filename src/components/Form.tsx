import React, { useRef, useState, type FormEvent } from "react";
import { useForm, type FieldValues } from "react-hook-form";

const Form = () => {
  interface FormData {
    name: string;
    age: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      {errors.name?.type === "required" && (
        <p className="text-danger">The name field is required.</p>
      )}
      {errors.name?.type === "minLength" && (
        <p className="text-danger">The name must be at least 3 charaters</p>
      )}
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-contorl"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
