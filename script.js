document.getElementById("show-contact-form").addEventListener("click", function() {
    var contactForm = document.querySelector(".contact-form-container");
    contactForm.style.display = (contactForm.style.display === "none" || contactForm.style.display === "") ? "block" : "none";
});

// Optionally, you can add logic to hide the form when the user clicks outside the form container.
document.addEventListener("click", function(event) {
    var contactForm = document.querySelector(".contact-form-container");
    if (!contactForm.contains(event.target) && event.target !== document.getElementById("show-contact-form")) {
        contactForm.style.display = "none";
    }
});



const arrowUp = document.getElementById('goToTopButton');

arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});









