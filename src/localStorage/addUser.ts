import { User } from "../script.js";

const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;


const resetFormFields = ():void => {
    nameInput.value = '';
    emailInput.value = '';
    location.reload()
}

const addUserToLocalStorage = (user: User):void => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}


export const AddUser = (event: MouseEvent):void => {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;

    if (!name || !email) {
        alert("Please complete all fields");
        return;
    }

    const newUser: User = {
        id: crypto.randomUUID(),
        name,
        email,
        role: "Lector",
    };

    resetFormFields();
    addUserToLocalStorage(newUser);

};

