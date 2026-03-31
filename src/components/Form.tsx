import React, { type FormEvent } from "react";

const Form = () => {
  function handleSubmmit(event: FormEvent) {
    event.preventDefault();
    console.log("Submitted!");
  }

  return (
    <form onSubmit={handleSubmmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-contorl" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
