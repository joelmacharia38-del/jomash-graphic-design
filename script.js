const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        "Hello Jomash Graphic Design,%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Subject: " + encodeURIComponent(subject) + "%0A%0A" +
        "Message:%0A" + encodeURIComponent(message);

    const whatsappURL =
        "https://wa.me/254140020155?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
});