/* ===================================================
   MANIIRAM INDUSTRIES
   script.js
=================================================== */

/* ===============================
   Mobile Navigation
================================ */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ===============================
   Close Mobile Menu
================================ */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ===============================
   Contact Form Mail
================================ */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const message = document.getElementById("message").value;

    const subject = "Product Enquiry - MANIIRAM INDUSTRIES";

    const body =
`Name : ${name}

Email : ${email}

Phone : ${phone}

Message :

${message}`;

    window.location.href =
`mailto:maniramindustriestneb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

});


/* ===============================
   Navbar Shadow on Scroll
================================ */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 18px rgba(0,0,0,0.15)";

    }

    else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";

    }

});