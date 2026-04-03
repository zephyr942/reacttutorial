import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const Practice = () => {
  const [users, setUsers] = useState<User[]>();
  const [error, setErr] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        setErr(err.message);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{err}</p>}
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};

export default Practice;
