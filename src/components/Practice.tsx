import React, { useEffect, useRef, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const Practice = () => {
  const [users, setUsers] = useState<User[]>();
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

  return (
    <>
      {isLoding && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};

export default Practice;
