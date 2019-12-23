// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of the Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        // Set Menu State
        showMenu = false;
    }
}

const working = () => {
    const work = document.querySelector(".sm-heading");
    work.innerHTML =
        "Nah, I'm kidding! <br /> I'm a Web Developer, Programmer & Designer. <br/>I code in C, C++, Python, Java, JavaScript & PHP. <br/> I like learning new things. <br />";

    setTimeout(() => {
        work.innerHTML += "I hate PHP. <br/>";
    }, 5000);

    setTimeout(() => {
        work.innerHTML +=
            "PS: Java & JavaScript are <b><a href='https://www.geeksforgeeks.org/difference-between-java-and-javascript/' target='_blank' onclick='window.location.reload()'>different!</a></b>";
    }, 15000);
};
