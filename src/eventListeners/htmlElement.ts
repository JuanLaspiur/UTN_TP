export const HTMLZoneElements = ():HTMLElement[] => {
    const adminZone = document.getElementById("Administrador") as HTMLElement;
    const editorZone = document.getElementById("Editor") as HTMLElement;
    const lectorZone = document.getElementById("Lector") as HTMLElement;

    return [adminZone, editorZone, lectorZone];
};


export const HTMLUserCardElements = ():HTMLElement[] => {
    const userCards = document.getElementsByClassName("user-card");
    return Array.from(userCards) as HTMLElement[];

}

export const HTMLFormElement = () :HTMLInputElement[] =>{
    const addButton = document.getElementById("addButton") as HTMLInputElement;
    const cleanButton = document.getElementById("clean") as HTMLInputElement;
    return [addButton, cleanButton]
}