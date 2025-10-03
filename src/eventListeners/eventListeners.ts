import { AddUser } from "../localStorage/addUser.js";
import { removeUsers } from "../localStorage/deleteUsers.js";
import { updateUserRole } from "../localStorage/updateUser.js";
import { Role } from "../script";
import { HTMLFormElement, HTMLUserCardElements, HTMLZoneElements } from "./htmlElement.js";


const formListeners = (buttons: HTMLInputElement[]):void => {
    const [addButton, cleanButton] = buttons;
    addButton.addEventListener("click", AddUser);
    cleanButton.addEventListener("click", removeUsers)
}


const userCardsListeners = (cards: HTMLElement[]):void => {
  cards.forEach(card => {
    card.draggable = true;

    card.addEventListener("dragstart", e => {
      e.dataTransfer?.setData("user-id", card.getAttribute("data-user-id") || "");
      card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => card.classList.remove("dragging"));
  });
};


const zoneDropListeners = (props: HTMLElement[]):void => {
    const zones = Object.values(props) as HTMLElement[];
    zones.forEach(zone => zone?.addEventListener("dragover", e => e.preventDefault()));
    zones.forEach(zone => zone?.addEventListener("drop", e => {
        e.preventDefault();
        const id = e.dataTransfer?.getData("user-id");
        if (id) updateUserRole(id, (e.currentTarget as HTMLElement).id as Role);
    }));
};



export const eventListeners = () => {
    formListeners(HTMLFormElement());
    userCardsListeners(HTMLUserCardElements());
    zoneDropListeners(HTMLZoneElements());
}


