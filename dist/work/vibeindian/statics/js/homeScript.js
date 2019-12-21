// Get The Required Elements (GetEle)
const bg = document.querySelector(".mainContent");
const overlayText = document.querySelector(".content");

// To Change BG Onload (ChOnL)
const changeBg = () => {
    bg.style.filter = "blur(5px)";
};

// On Mouse Over (OMOv)
overlayText.addEventListener("mouseover", () => {
    bg.style.filter = "blur(5px)";
    overlayText.style.filter = "blur(0px)";
});

// On Mouse Out (OnMo)
overlayText.addEventListener("mouseout", () => {
    bg.style.filter = "blur(0px)";
    overlayText.style.filter = "blur(2px)";
});

// Back To Top (B2T)
const myButton = document.getElementById("myBtn");

// Show Button When User Scrolls 300px From Top (ScSho300)
window.onscroll = function() {
    scrollFunction();
};

// Show Button On Scroll (ScSho)
function scrollFunction() {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// Scroll To Top On Click (S2T)
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Toggle "active" Class (TogaC)
const changeActive = evt => {
    // For Debugging
    // console.log(evt);

    // Get all elements with class="nav-link" and remove the class active
    const navLinks = document.querySelectorAll(".nav-link");
    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("active");
    }

    // Add "active" class to current element
    evt.classList.add("active");
};
