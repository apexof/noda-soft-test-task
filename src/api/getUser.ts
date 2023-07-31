import { IUser } from "../types";

const URL = "https://jsonplaceholder.typicode.com/users";

export const getUser = async (id: number): Promise<IUser> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error("IUser not found");
  }

  return res.json();
};
