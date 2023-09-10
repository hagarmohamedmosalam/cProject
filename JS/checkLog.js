let userInfo = document.querySelector("#user-info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logOutBtn = document.querySelector("#logout");
let addQuize = document.querySelector(".ad-quize");

let userName = localStorage.getItem("fullName");
if (userName) {
  links.remove();
  userInfo.style.display = "flex";
  userDom.innerHTML = userName;
}

logOutBtn.addEventListener("click", logOut);
function logOut() {
  localStorage.clear();
  setTimeout(() => {
    window.location = "index.html";
  }, 1500);
}
