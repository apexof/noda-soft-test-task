import { User } from "../types";

const URL = "https://jsonplaceholder.typicode.com/users";

export const getUser = async (id: number): Promise<User> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error("User not found");
  }

  return res.json();
};
