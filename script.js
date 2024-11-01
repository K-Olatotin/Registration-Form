document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
      
        event.preventDefault();

        if (!validateForm()) {
            alert("Please fill out all required fields correctly.");
            return;
        }

        handleFormSubmission();
    });
});

function validateForm() {
    let isValid = true;

    const firstName = document.getElementById("first-name").value;
    if (firstName.trim() === "") {
        alert("First name is required.");
        isValid = false;
    }

    const lastName = document.getElementById("last-name").value;
    if (lastName.trim() === "") {
        alert("Last name is required.");
        isValid = false;
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    const password = document.getElementById("new-password").value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.");
        isValid = false;
    }

    const terms = document.getElementById("terms-and-conditions").checked;
    if (!terms) {
        alert("You must accept the terms and conditions.");
        isValid = false;
    }

    return isValid;
}

function handleFormSubmission() {
    alert("Form submitted successfully!");

    document.querySelector("form").reset();
}
