console.log("JS is running")
const toggle = document.getElementById("menuToggle");
const nav = document.querySelector(".navLinks");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active")
});

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
    slides.forEach((s, idx) => {
        s.classList.toggle("active", idx === i);
        s.setAttribute("aria-hidden", idx === i ? "false" : "true");
    });

    dots.forEach((d, idx) => {
        d.classList.toggle("dotActive", idx === i);
        d.setAttribute("aria-selected", idx === i ? "true" : "false");
        d.setAttribute("tabindex", idx === i ? "0" : "-1");
    });

    index = i;
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));

    dot.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            showSlide(i);
        }
    });
});

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 4000);

document.querySelectorAll('.accordionHeader').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const expanded = header.getAttribute("aria-expanded") === "true";

        header.setAttribute("aria-expanded", !expanded);
        item.classList.toggle('active');
    });
});
document.querySelectorAll('.navLinks a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navLinks').classList.remove('active');
    });
});

window.onload = function () {

    const sendBtn = document.getElementById("sendBtn");

    sendBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
        const formError = document.getElementById("formError");

        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        formError.textContent = "";

        let valid = true;

        const namePattern = /^[A-Za-z .]+$/;
        if (!namePattern.test(name)) {
            nameError.textContent = "This field allows only letters, space, and dots for upper and lower case letters.";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        const phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phone)) {
            phoneError.textContent = "This field allows only numbers";
            valid = false;
        }

        if (!name || !email || !phone || !message) {
            formError.textContent = "Enter the complete details";
            valid = false;
        }

        if (valid) {
            alert("Form submitted!");
        }
    });

};