import React, { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

const Practice = () => {
  const [users, setUsers] = useState<User[]>();
  const [error, setErr] = useState("");

  useEffect(() => {
    //Standard but ugly solution
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/xusers",
        );
        setUsers(res.data);
      } catch (error) {
        setErr((error as AxiosError).message);
      }
    };
    fetchUsers();

    //better way
    // axios
    //   .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => {
    //     setErr(err.message);
    //   });
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
