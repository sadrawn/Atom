// filling header and footer
import { HeaderFiller ,FooterFiller } from "./Filler.js";
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

// Activating Dropdown
const dropButton = document.querySelector('.hamburgerMenu');
const dropdown = document.querySelector('.HeaderDropDown');
const exitButton = document.querySelector('.exit'); // Cache the exit button

dropButton.addEventListener('click', () => {
    dropdown.style.display = "flex";
    // No need for setTimeout here, directly apply styles
    document.body.style.overflow = "hidden";
    dropdown.style.width = `${window.innerWidth}px`; // Use template literals for clarity
    dropdown.style.transform = "translateX(0)";
    dropdown.style.opacity = "1";
});

// Deactivating Dropdown
exitButton.addEventListener('click', () => {
    dropdown.style.transform = "translateX(100%)";
    document.body.style.overflow = "auto";
    // No need for setTimeout here either
    dropdown.style.opacity = "0";
    dropdown.style.display = "none";
});
