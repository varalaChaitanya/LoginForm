// Select the form and all input fields
const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Select the error elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Add event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting if validation fails

  let isValid = validateForm(); // Call validation function

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset(); // Clear the form after successful submission
  }
});

// Add event listeners for input changes to clear errors dynamically
[fullName, email, phone, password, confirmPassword].forEach((input) => {
  input.addEventListener("input", function () {
    validateField(input); // Validate field on input change
  });
});

// Main validation function for the entire form
function validateForm() {
  let valid = true;

  if (!validateName()) valid = false;
  if (!validateEmail()) valid = false;
  if (!validatePhone()) valid = false;
  if (!validatePassword()) valid = false;
  if (!validateConfirmPassword()) valid = false;

  return valid;
}

// Individual field validation functions
function validateName() {
  const nameValue = fullName.value.trim();
  if (nameValue.length < 5) {
    nameError.textContent = "Name must be at least 5 characters long.";
    return false;
  }
  nameError.textContent = ""; // Clear error if valid
  return true;
}

function validateEmail() {
  const emailValue = email.value.trim();
  if (!emailValue.includes("@")) {
    emailError.textContent = 'Enter a valid email with "@" symbol.';
    return false;
  }
  emailError.textContent = ""; // Clear error if valid
  return true;
}

function validatePhone() {
  const phoneValue = phone.value.trim();
  const phonePattern = /^[0-9]{10}$/; // Ensure 10-digit number

  if (phoneValue === "123456789") {
    phoneError.textContent = 'Phone number cannot be "123456789".';
    return false;
  } else if (!phonePattern.test(phoneValue)) {
    phoneError.textContent = "Enter a valid 10-digit phone number.";
    return false;
  }
  phoneError.textContent = ""; // Clear error if valid
  return true;
}

function validatePassword() {
  const passwordValue = password.value.trim();
  const nameValue = fullName.value.trim().toLowerCase();

  if (
    passwordValue.toLowerCase() === "password" ||
    passwordValue.toLowerCase() === nameValue
  ) {
    passwordError.textContent = 'Password cannot be "password" or your name.';
    return false;
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    return false;
  }
  passwordError.textContent = ""; // Clear error if valid
  return true;
}

function validateConfirmPassword() {
  if (password.value.trim() !== confirmPassword.value.trim()) {
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  }
  confirmPasswordError.textContent = ""; // Clear error if valid
  return true;
}

// Validate individual field on input change
function validateField(input) {
  switch (input.id) {
    case "fullName":
      validateName();
      break;
    case "email":
      validateEmail();
      break;
    case "phone":
      validatePhone();
      break;
    case "password":
      validatePassword();
      break;
    case "confirmPassword":
      validateConfirmPassword();
      break;
  }
}
