import { renderCardUsers } from "./front/renderCardUsers.js";
import { getUsersFromLocalStorage } from "./localStorage/getUsers.js";
import { eventListeners } from "./eventListeners/eventListeners.js";

export type Role = "Administrador" | "Editor" | "Lector";

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;

}



const main = () => {
    const users = getUsersFromLocalStorage();
    renderCardUsers(users)
    eventListeners()
}



main();



