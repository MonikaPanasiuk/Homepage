{
    const welcome = () => {
        console.log("Witam i pozdrawiam!!");
    }

    const onHideImageClick = () => {

        const image = document.querySelector(".js-image");
        image.remove();

    };

    const onChangeBackgroundColor = () => {

        const body = document.querySelector(".js-body");
        body.classList.toggle("blackBackground");
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", onChangeBackgroundColor);

        const button = document.querySelector(".js-button");
        button.addEventListener("click", onHideImageClick);


        welcome();
    }

    init();
}


