var menu = document.getElementById("menu");
var navMenu = document.querySelector(".navbar__menu");
var navLinks = document.querySelectorAll(".navbar__menu--links");

if (menu) {
    menu.onclick = function() {
        menu.classList.toggle("openmenu");
        if (navMenu) {
            navMenu.classList.toggle("active");
        }
    };
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (menu && menu.classList.contains("openmenu")) {
            menu.classList.remove("openmenu");
            if (navMenu) {
                navMenu.classList.remove("active");
            }
        }
    });
});

// Script für Galerie-Scrolling
let scrollContainer = document.querySelector(".specialities__gallery");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollContainer.scrollLeft += evt.deltaY;
scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
scrollContainer.style.scrollBehavior = "smooth";
scrollContainer.scrollLeft += 1000;
});

prevBtn.addEventListener("click", () => {
scrollContainer.style.scrollBehavior = "smooth";
scrollContainer.scrollLeft -= 1000;
});

// Dieses Skript wird ausgeführt, nachdem das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
// Scrollbar ausblenden
const gallery = document.querySelector(".specialities__gallery");
gallery.style.overflow = "hidden";
});


//Loading one by one
/* Takes callback function into its constructor, can obersve multipe elements 
or entries at the same time and runs every time the visibility of one of the 
elements changes */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) { //Is it intersectiong the viewport?
            entry.target.classList.add('show'); //If it is intersecting, add class "show"
        } else {
            entry.target.classList.remove('show'); //removes class when not intersecting
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden'); //Grabs all the elements with the "hidden" class
hiddenElements.forEach((el) => observer.observe(el)); //observes all hidden elements