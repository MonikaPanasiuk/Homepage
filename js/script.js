
console.log("Witam i pozdrawiam!!");

let button = document.querySelector(".js-button");
let image = document.querySelector(".js-image");

button.addEventListener("click", () => {
    image.remove();
});


let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton")
let body = document.querySelector(".js-body");

changeBackgroundButton.addEventListener("click", () => {
body.classList.toggle ("blackBackground");
});


