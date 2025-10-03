import { updateUserType } from "../localStorage/updateUser.js";
import { Role, User } from "../script";

const administradorDropZone = document.getElementById("Administrador");
const editorDropZone = document.getElementById("Editor");
const lectorDropZone = document.getElementById("Lector");

export const renderCardUsers = (users: User[]) => {
    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.textContent = `${user.name} (${user.email})`;
        userCard.setAttribute("data-user-id", user.id);
        userCard.draggable = true;

        switch (user.role) {
            case "Administrador":
                administradorDropZone!.appendChild(userCard);
                break;
            case "Editor":
                editorDropZone!.appendChild(userCard);
                break;
            case "Lector":
                lectorDropZone!.appendChild(userCard);
                break;
        }
    });
}

[administradorDropZone, editorDropZone, lectorDropZone].forEach(zone => {
  zone?.addEventListener("dragover", (e) => {
    e.preventDefault(); // necesario para permitir el drop
  });

  zone?.addEventListener("drop", (e) => {
    e.preventDefault();

    const userId = e.dataTransfer?.getData("user-id");
    const dropZone = e.currentTarget as HTMLElement;

    console.log("Se soltó userId:", userId, "en zona:", dropZone.id);

    if (userId) {
      updateUserType(userId, dropZone.id as Role);
    }
  });
});