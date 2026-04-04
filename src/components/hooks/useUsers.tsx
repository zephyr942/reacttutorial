import { useEffect, useState } from "react";
import userServices, { type User } from "../../services/user-services";
import { CanceledError } from "../../services/api-client";

const useUsers = () => {
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

  return { users, setUsers, error, setError, isLoding, setLoading };
};

export default useUsers;
