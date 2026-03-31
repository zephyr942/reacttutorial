import React, { useRef, type FormEvent } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  const ageRef = useRef<HTMLInputElement>(null);

  function handleSubmmit(event: FormEvent) {
    event.preventDefault();
    if (nameRef.current !== null) console.log(nameRef.current.value);
    if (ageRef.current !== null) console.log(ageRef.current.value);
  }

  return (
    <form onSubmit={handleSubmmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-contorl" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
