const form = document.querySelector(".form");
const mail = document.querySelector(".mail");
const password = document.querySelector(".pass");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (mail.value === "" || password.value === "") {
    error.innerText = "Please fill in all the fields";
  } else if (!mail.value.includes("@")) {
    error.innerText = "Please enter a valid mail address";
  } else if (password.value.length < 6) {
    error.innerText = "Password must be at least 6 characters long";
  } else {
    error.innerText = "Success";
  }
});
