const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
const emailErrorMessage = document.querySelector(".email-error-messsage");
let passwordErrorMessage = document.getElementById("pass-error");

// validate client side
email.addEventListener("focusout", () => {
  const emailValue = document.getElementById("email").value;
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmail.test(emailValue) || emailValue.length <= 0) {
    emailErrorMessage.textContent = "Please Enter a valid E-mail";
  } else {
    emailErrorMessage.textContent = "valid Email";
  }
});

password.addEventListener("focusout", () => {
   const password = document.getElementById("password").value;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ ;
  if (!regexPassword.test(password) || password.length <= 0) {
    passwordErrorMessage.textContent = "please inter a Valid password";
  } else {
    passwordErrorMessage.textContent = "valid password";
  }

});

loginBtn.addEventListener("click", () =>{
  login()
})

// validate server side

const login = () => {
  const request = {
    method: 'POST',
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch('/login', request)
    .then((result) => result.json())
    .then((res) => {
      if (res.status === 400) {
        swal('Warning !', res.msg, 'warning');
      } else if (res.status === 500) {
        swal('Warning !', res.msg, 'warning');
      } else {
        window.location.href = '/posts';
      }
    });
};
