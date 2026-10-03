/* =================================
   DARK / LIGHT MODE
================================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        themeBtn.textContent = "☀";

    } else {

        themeBtn.textContent = "☾";

    }

});


/* =================================
   MOBILE MENU
================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


/* =================================
   READ MORE
================================= */

const readMoreBtn =
    document.getElementById("readMoreBtn");

const moreText =
    document.getElementById("moreText");


readMoreBtn.addEventListener("click", function () {

    moreText.classList.toggle("show");


    if (
        moreText.classList.contains("show")
    ) {

        readMoreBtn.textContent =
            "Show Less ↑";

    } else {

        readMoreBtn.textContent =
            "Read More ↓";

    }

});


/* =================================
   CURRENT TIME
================================= */

function updateClock() {

    const clock =
        document.getElementById("clock");

    const now = new Date();

    clock.textContent =
        now.toLocaleTimeString();

}


setInterval(updateClock, 1000);

updateClock();


/* =================================
   CURRENT YEAR
================================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();


/* =================================
   PROJECT BUTTON
================================= */

function openProject(projectName) {

    showToast(
        projectName +
        " selected! Add your actual project link."
    );

}


/* =================================
   CONTACT BUTTON
================================= */

function sendMessage() {

    showToast(
        "Thank you! Replace the email address with your own."
    );

}















/* =================================
   TOAST MESSAGE
================================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);

}

