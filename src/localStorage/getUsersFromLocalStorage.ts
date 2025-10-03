import { User } from "../script";


export const getUsersFromLocalStorage = (): User[] => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};
