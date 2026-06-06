// contact.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = form.querySelector('input[type="text"]'); // Full Name
    const emailInput = form.querySelector('input[type="email"]'); // Email
    const phoneInput = form.querySelectorAll('input[type="text"]')[1]; // Phone
    const messageTextarea = form.querySelector('textarea'); // Message

    form.addEventListener('submit', (event) => {
        let isValid = true;
        const errors = [];

        // Clear previous error messages
        clearErrors();

        // Validate full name
        if (nameInput.value.trim() === '') {
            errors.push("Full Name is required.");
            isValid = false;
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            errors.push("Email is required.");
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            errors.push("Please enter a valid email address.");
            isValid = false;
        }

        // Validate phone (must be digits only)
        if (phoneInput.value.trim() === '') {
            errors.push("Phone number is required.");
            isValid = false;
        } else if (!/^\d+$/.test(phoneInput.value.trim())) {
            errors.push("Phone number must contain only digits.");
            isValid = false;
        }

        // Validate message
        if (messageTextarea.value.trim() === '') {
            errors.push("Message cannot be empty.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            displayErrors(errors);
        } else {
            // Show thank you alert after successful submission
            alert("Thank you for contacting us! We will get back to you within 24 hours.");
            // Optionally, reset the form
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return re.test(email);
    }

    function displayErrors(errors) {
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-messages');
        errorContainer.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
        form.prepend(errorContainer);
    }

    function clearErrors() {
        const existingErrors = form.querySelector('.error-messages');
        if (existingErrors) {
            existingErrors.remove();
        }
    }
});
