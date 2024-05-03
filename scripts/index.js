// filling header and footer
import { HeaderFiller, FooterFiller } from "./Filler.js";
FooterFiller();
HeaderFiller();

function disableScroll() {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Prevent the default behavior of the scroll event
    window.onscroll = () => {
        window.scrollTo(0, scrollY);
    };
}

// ! activating dropdown
let dropButton = document.querySelector('.hamburgerMenu');
let dropdown = document.querySelector('.HeaderDropDown');

// coming in 
dropButton.addEventListener('click', () => {
    dropdown.style.display = "flex";
    setTimeout(() => {
        document.querySelector('body').style.overflow = "hidden";
        dropdown.style.transform = "translateX(0)";
        dropdown.style.opacity = "1";
    }, 100);
});

// getting out 
document.querySelector('.exit').addEventListener('click', () => {
    dropdown.style.transform = "translateX(-100%)";
    document.querySelector('body').style.overflow = "auto";
    setTimeout(() => {
        dropdown.style.opacity = "0";
        dropdown.style.display = "none";
    }, 100);
});

