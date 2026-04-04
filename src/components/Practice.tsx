import React, { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";
import { CanceledError } from "../services/api-client";
import type { User } from "../services/user-services";
import userServices from "../services/user-services";

const Practice = () => {
  const [users, setUsers] = useState<User[]>([]); //initialisation is very important
  const [error, setError] = useState("");
  const [isLoding, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userServices.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; //don't show the first cancel text
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userServices.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Zephyr" };
    setUsers([newUser, ...users]);

    userServices
      .create(newUser)
      .then(({ data: saveUser }) => {
        //destructed the response to {data}  = const {data} = response
        setUsers([saveUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userServices.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {isLoding && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      {users.map((user) => (
        <ul className="list-group">
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Practice;
