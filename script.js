const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const submit = document.querySelector("button[type='submit']");
const formContent = document.querySelector(".form-content");
const form = document.querySelector(".form-section form");
const passwordLabel = document.querySelector("label[for='password']");

form.addEventListener("submit", (e) => {
  // Preven the form from submitting
  e.preventDefault();

  // Get all input fields
  const inputs = formContent.querySelectorAll("input");
  let valid = true; // form validity
  let password = "";
  let confirmPassword = "";

  // Loop through each input to check validity
  [...inputs].forEach((input) => {
    if (!input.checkValidity()) {
      valid = false;
      input.classList.add("invalid");
    } else {
      // Get password from input if valid
      if (input.id === "password") {
        password = input.value;
      }
      if (input.id === "confirm-password") {
        confirmPassword = input.value;
      }

      input.classList.remove("invalid");
    }
  });

  // Check password match
  if (
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword
  ) {
    passwordLabel.classList.remove("password-error");
    passwordInput.classList.remove("invalid");
    confirmPasswordInput.classList.remove("invalid");
  } else {
    valid = false;

    passwordLabel.classList.add("password-error");
    passwordInput.classList.add("invalid");
    confirmPasswordInput.classList.add("invalid");
  }

  // Submit if valid
  if (valid) {
    form.submit(); // Uncomment this line to submit the form
  }
});
