// ===================================
// 1. WELCOME MESSAGE
// ===================================

window.addEventListener("load", function () {

    console.log("Welcome to PulseFit Gym & Fitness!");

});


// ===================================
// 2. MEMBERSHIP SELECTION
// ===================================

let planButtons = document.querySelectorAll(".pricing-card .btn");

planButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        let planName = this.parentElement.querySelector("h3").innerText;

        document.getElementById("selectedPlan").value = planName;

        alert("You selected the " + planName + " Membership Plan!");

    });

});


// ===================================
// 3. CONTACT FORM VALIDATION
// ===================================

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all required fields!");

    } else {

        alert(
            "Thank you, " + name +
            "! Your form has been validated successfully."
        );

        contactForm.reset();

    }

});


// ===================================
// 4. BACK TO TOP BUTTON
// ===================================

let topButton = document.createElement("button");

topButton.innerText = "↑";

topButton.className = "top-btn";

topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);


// Show button when user scrolls down

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


// Scroll back to top

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});