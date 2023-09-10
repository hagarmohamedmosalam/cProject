let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let signInBtn = document.querySelector("#signin");

let getUser = localStorage.getItem("fullName");
let getPassword = localStorage.getItem("password");
signInBtn.addEventListener("click", signIn);
function signIn(e) {
  e.preventDefault();
  if (userName.value === "" || password.value === "") {
    alert("please fill data");
  } else {
    if (
      getUser &&
      getUser === userName.value.trim() &&
      getPassword &&
      getPassword === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      alert("wrong");
    }
  }
}
