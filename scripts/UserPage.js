// filling header and footer
import { HeaderFiller, FooterFiller } from "./Filler.js";
import { asideActivator } from "./AsideActivator.js";
// calliing the footer nad header filler function 
FooterFiller();
HeaderFiller();
// calling the aside codes
asideActivator();

let button = document.querySelector('.account img');
button.src = "../resource/images/icons/icons8-menu-50 (2).png";
let Aside = document.querySelector('aside');
button.addEventListener('click', () => {
    if (Aside.style.display == "none") {
        Aside.style.display = "flex";
    }
    else {
        Aside.style.display = "none";
    }
});
