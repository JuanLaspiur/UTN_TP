import { Role, User } from "../script";

export const updateUserType = (id: string, role: Role) => {
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

  const updatedUsers = users.map(user => {
    if (user.id === id) {
      return { ...user, role }; 
    }
    return user;
  });

  localStorage.setItem("users", JSON.stringify(updatedUsers));
  location.reload()
};
