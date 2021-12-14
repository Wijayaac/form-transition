const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const labelEmail = document.getElementById("labelEmail");
const labelPassword = document.getElementById("labelPassword");

emailInput.addEventListener("focus", () => {
  labelEmail.classList.add("formTop");
});
emailInput.addEventListener("blur", () => {
  labelEmail.classList.remove("formTop");
});
passwordInput.addEventListener("focus", () => {
  labelPassword.classList.add("formTop");
});
passwordInput.addEventListener("blur", () => {
  labelPassword.classList.remove("formTop");
});
