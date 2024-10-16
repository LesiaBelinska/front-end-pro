"use strict";

const sendMessageButton = document.querySelector("#send-message-button");
const nameField = document.querySelector("#name");
const messageField = document.querySelector("#message");
const phoneField = document.querySelector("#phone-number");
const emailField = document.querySelector("#email");
const errorMessages = document.querySelectorAll(".error-message");

const validateField = (field, errorElementId, validationFn, errorMessage) => {
    const errorElement = document.querySelector(errorElementId);
    if (!validationFn(field.value.trim())) {
        errorElement.textContent = errorMessage;
        field.classList.add("error");

        return false;
    } else {
        errorElement.textContent = "";
        field.classList.remove("error");

        return true;
    }
};

sendMessageButton.addEventListener("click", function () {
    errorMessages.forEach((message) => (message.textContent = ""));

    let isValid = true;

    isValid &= validateField(
        nameField,
        "#name-error",
        (value) => value !== "",
        "Name is required"
    );

    isValid &= validateField(
        messageField,
        "#message-error",
        (value) => value.length >= 5,
        "Message must be at least 5 characters"
    );

    const phonePattern = /^\+380\d{9}$/;
    isValid &= validateField(
        phoneField,
        "#phone-error",
        (value) => phonePattern.test(value),
        "Phone number must start with +380 and contain 12 digits"
    );

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid &= validateField(
        emailField,
        "#email-error",
        (value) => emailPattern.test(value),
        "Please enter a valid email address"
    );

    if (isValid) {
        console.log("Name:", nameField.value.trim());
        console.log("Message:", messageField.value.trim());
        console.log("Phone Number:", phoneField.value.trim());
        console.log("Email:", emailField.value.trim());
    }
});
