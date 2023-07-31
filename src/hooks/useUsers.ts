import { useEffect, useState } from "react";
import { IUser } from "../types";
import { getUser } from "../api/getUser";

interface IUseUsersResult {
  loading: boolean;
  users: Record<number, IUser>;
  error?: string;
}

export const useUsers = (id?: number): IUseUsersResult => {
  const [users, setUsers] = useState<Record<number, IUser>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!id) {
      return;
    }
    if (users[id]) {
      console.log("user get from cache");
      return;
    }

    setLoading(true);

    getUser(id)
      .then((user) => {
        setUsers((oldUsers) => ({ ...oldUsers, [id]: user }));
      })
      .catch((error: Error) => {
        console.error("Error: ", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    loading,
    error,
    users,
  };
};
