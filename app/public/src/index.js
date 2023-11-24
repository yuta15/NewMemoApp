const hamburger = document.querySelector(".hamburger");
const accordionAddButton = document.getElementsByClassName("accordion-button");
const addItemScreen = document.getElementById("add-item-screen");
const addItemScreenClose = document.getElementById("cancel-add-item");
const addItemButton = document.getElementById("add-item");
const editItemButton = document.getElementsByClassName("edit-button");
const editItemScreen = document.getElementById("edit-item-screen");
const editScreenClose = document.getElementById("cancel-edit-item");


async function getDatabase() {
    const response = await fetch(`http://172.23.34.132/test`);
    const json = await response.json();
    return json;
}


hamburger.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
});

for (let acc = 0; acc < accordionAddButton.length; acc++) {
    accordionAddButton[acc].addEventListener("click", (e) =>  {
        e.target.parentNode.classList.toggle("active");
    });
}

addItemButton.addEventListener("click", () => {
    addItemScreen.classList.toggle("active");
});

addItemScreenClose.addEventListener("click", () => {
    addItemScreen.classList.toggle("active");
});

for (let editItem = 0; editItem < editItemButton.length; editItem++){
    editItemButton[editItem].addEventListener("click", () => {
        const json = getDatabase();
        console.log(json);
        editItemScreen.classList.toggle("active");
    });
}

editScreenClose.addEventListener("click", () => {
    editItemScreen.classList.toggle("active");
});

