import React, { useRef, useState, type FormEvent } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const [person, setPerson] = useState({ name: "", age: "" });

  function handleSubmmit(event: FormEvent) {
    event.preventDefault();
    console.log(person);
  }

  return (
    <form onSubmit={handleSubmmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
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
