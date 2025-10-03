import { HTMLZoneElements } from "../eventListeners/htmlElement";
import {  User } from "../script";

const [adminZone, editorZone, lectorZone]= HTMLZoneElements();

export const renderCardUsers = (users: User[]) => {
    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.textContent = `${user.name} (${user.email})`;
        userCard.setAttribute("data-user-id", user.id);
        userCard.draggable = true;

        switch (user.role) {
            case "Administrador":
                adminZone!.appendChild(userCard);
                break;
            case "Editor":
                editorZone!.appendChild(userCard);
                break;
            case "Lector":
                lectorZone!.appendChild(userCard);
                break;
        }
    });
}

