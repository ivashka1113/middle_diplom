"use strict";

const modalHeader = () => {
    const overlay = document.querySelector(".overlay");
    const warning = document.querySelector(".header-modal");
    const closeBtn = warning.querySelector(".header-modal__close");
    const openBtn = document.querySelector(".button a");

    openBtn.addEventListener("click", () => {
        overlay.style.display = "block";
        warning.style.display = "block";
    })

    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        warning.style.display = "none";
    })

}

export default modalHeader;