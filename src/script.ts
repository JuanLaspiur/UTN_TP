import { renderCardUsers } from "./front/renderCardUsers.js";
import { removeUsersFromLocalStorage } from "./localStorage/deleteUsersFromLocalStorage.js";
import { getUsersFromLocalStorage } from "./localStorage/getUsersFromLocalStorage.js";
import { handleAddUser } from "./localStorage/handleAddUser.js";
import { updateUserType } from "./localStorage/updateUser.js";

export type Role = "Administrador" | "Editor" | "Lector";

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;

}

const addButton = document.getElementById("addButton") as HTMLInputElement;
const cleanButton = document.getElementById("clean") as HTMLInputElement;


addButton.addEventListener("click", handleAddUser);
cleanButton.addEventListener("click", removeUsersFromLocalStorage)


const verSiAndo = () => {
    const userCards = document.getElementsByClassName("user-card");

    const userCardsArray = Array.from(userCards) as HTMLElement[];

    userCardsArray.forEach(card => {
        card.draggable = true; 

        card.addEventListener("dragstart", (event) => {
            event.dataTransfer?.setData("user-id", card.getAttribute("data-user-id") || "");
            card.classList.add("dragging");
        });

        card.addEventListener("dragend", (e) => {
            console.log(e.target) 
           card.classList.remove("dragging");
        });
        
    });


}

const main = () => {
    const users = getUsersFromLocalStorage();
    renderCardUsers(users)
    verSiAndo()
}



main();



