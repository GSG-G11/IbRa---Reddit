const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");
const checkPassword = document.getElementById("checkPassword");
const registerBtn = document.getElementById("login");

const emailErrorMessage = document.querySelector(".email-error-messsage");
const usernameMessage = document.getElementById("name-error-messsage");
const confPasswordError = document.getElementById(
  "confPassword-error-messsage"
);
let passwordErrorMessage = document.getElementById("password-error-messsage");

email.addEventListener("focusout", () => {
  const emailValue = document.getElementById("email").value;
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmail.test(emailValue) || emailValue.length <= 0) {
    emailErrorMessage.textContent = "Please Enter a valid E-mail";
  } else {
    emailErrorMessage.textContent = "valid Email";
  }
});

username.addEventListener("focusout", () => {
  const usernameValue = document.getElementById("username").value;
  console.log(usernameMessage);
  if (usernameValue.length < 3) {
    usernameMessage.textContent = "username should be more than 3 characters";
  } else {
    usernameMessage.textContent = "valid username";
  }
});

password.addEventListener("focusout", () => {
  const passwordValue = document.getElementById("password").value;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (!regexPassword.test(passwordValue) || passwordValue.length <= 0) {
    passwordErrorMessage.textContent = "please inter a Valid password";
  } else {
    passwordErrorMessage.textContent = "valid password";
  }
});

checkPassword.addEventListener("focusout", () => {
  const passwordValue = document.getElementById("password").value;
  const checkPasswordValue = document.getElementById("checkPassword").value;
  if (checkPasswordValue <= 0 || checkPasswordValue !== passwordValue) {
    confPasswordError.textContent = "passwords do not match";
  } else {
    confPasswordError.textContent = "password match!";
  }
});


const signup = () => {
  const request = {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      name: username.value,
      password: password.value
    }),
    headers: { "Content-Type": "application/json" },
  };
  return fetch("/home", request)
    .then((result) => result.json())
    .then((res) => {
        console.log(res)
        window.location.href = "/posts";
    });
};

registerBtn.addEventListener("click", (e) => {
    console.log(email.value)

  e.preventDefault();
  signup();
  
});
