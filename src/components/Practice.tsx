import React, { useEffect, useRef, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const Practice = () => {
  const [users, setUsers] = useState<User[]>([]); //initialisation is very important
  const [error, setError] = useState("");
  const [isLoding, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController(); //avoid that the request send to the server twice
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; //don't show the first cancel text
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {isLoding && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      {users.map((user) => (
        <ul className="list-group">
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Practice;
