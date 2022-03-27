const { response } = require("express");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");
const emailErrorMessage = document.querySelector(".email-error-messsage");
const passwordErrorMessage = document.querySelector(".password-error-messsage");

emailInput.addEventListener("focusout", () => {
  const email = document.getElementById("email").value;
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!validEmail.test(email) || email.length <= 0) {
    emailErrorMessage.textContent = "please Inter a valid email";
  } else {
    emailErrorMessage.textContent = "Valid email ✓";
  }
});

passwordInput.addEventListener("focusout", () => {
  const password = document.getElementById("password").value;
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (!validPassword.test(password) || password.length <= 0) {
    passwordErrorMessage.textContent =
      "Please enter a valid password, including symbols, numbers and uppercaase and lowercase letters";
  } else {
    passwordErrorMessage.textContent = "Valid password ✓";
  }
});

fetch("/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email,
    password,
  }),
})
.then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        window.location = '/index';
      } else if (res.errorType === 'passwordError') {
        document.querySelector('.password-error-messsage').textContent = res.message;
      } else if (res.errorType === 'emailError') {
        emailErrorMessage.textContent = res.message;
      }
    })
    .catch(() => {
      window.location.href = '/';
    });

