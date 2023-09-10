let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signUpBtn = document.querySelector("#signUp");

signUpBtn.addEventListener("click", signUp);
function signUp(e) {
  e.preventDefault();
  if (fullName.value === "" || email === "" || password === "") {
    alert("please fill data");
  } else {
    localStorage.setItem("fullName", fullName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    setTimeout(() => {
      window.location = "/signin-instractor.html";
    }, 1500);
  }
}
