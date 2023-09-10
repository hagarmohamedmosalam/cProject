let switcherlis = document.querySelectorAll(".switcher a");
let cards = document.querySelectorAll(".nagla");
switcherlis.forEach((a) => {
  a.addEventListener("click", removeActive);
  a.addEventListener("click", manageCards);
});

function removeActive() {
  switcherlis.forEach((a) => {
    a.classList.remove("active");
    this.classList.add("active");
  });
}

function manageCards() {
  cards.forEach((div) => {
    div.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "flex";
  });
}

let searchMood = "courses";
function getSearchMood(id) {
  let search = document.getElementById("search-box");
  if (id == "searchCourses") {
    searchMood = "courses";
    search.Placeholder = "Search By courses";
  } else {
    searchMood = "Instractors";
    search.Placeholder = "Search By Instractors";
  }
  search.focus();
}

let productsDom = document.querySelector(".products");
let productsDom2 = document.querySelector(".products2");



function drawUiProducts() {
  let productsUi = products.map((item) => {
    return `
  <div class="col-sm-4 ">
    <div class="card card-border-rad ">
              <img
                src="${item.imgesUrl}"
                class="card-img-top img-border-rad"
                alt="reactjs-course"
              />
              <div class="card-body card-height">
                <div class="mb-2 ms-3"><span class="h4">${item.price}</span></div>
                <h5 class="card-title title-font-size">${item.title}</h5>
                <p class="card-text mb-2">${item.instructor}</p>
                <div class="d-flex justify-content-between">
                  <span class="card-time-margine h6"
                    ><i class="fa-regular fa-clock"></i> <span>2:30</span></span
                  >
                  <div class="d-flex">
                    <span class="h6">4.6</span>
                    <div class="rating-star ms-2 h6">
                      <i class="fa-solid fa-star"></i
                      ><i class="fa-solid fa-star"></i
                      ><i class="fa-solid fa-star"></i
                      ><i class="fa-solid fa-star"></i
                      ><i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex justify-content-between" onclick="addedToCart(${item.id})">
                  <a href="#" class="btn btn-primary"  
                    ><span
                      ><i class="fa-solid fa-cart-shopping fa-bounce"></i
                    ></span>
                    add to cart
                  </a>
                  <span
                    id="fav-icon"
                    class="h4 fav-icon"
                    onclick="fillFaveIcon()"
                  >
                    <i class="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>
  </div>        
    `;
  });

  productsDom.innerHTML = productsUi;
}
drawUiProducts();

function drawUiProducts2() {
  let productsUi2 = products2.map((item) => {
    return `
  <div class="col-sm-4">
    <div class="card card-border-rad ">
              <img
                src="${item.imgesUrl}"
                class="card-img-top img-border-rad"
                alt="reactjs-course"
              />
              <div class="card-body card-height">
                <div class="mb-2 ms-3"><span class="h4">${item.price}</span></div>
                <h5 class="card-title title-font-size">${item.title}</h5>
                <p class="card-text mb-2">${item.instructor}</p>
                <div class="d-flex justify-content-between">
                  <span class="card-time-margine h6"
                    ><i class="fa-regular fa-clock"></i> <span>2:30</span></span
                  >
                  <div class="d-flex">
                    <span class="h6">4.6</span>
                    <div class="rating-star ms-2 h6">
                      <i class="fa-solid fa-star"></i
                      ><i class="fa-solid fa-star"></i
                      ><i class="fa-solid fa-star"></i
                      ><i class="fa-solid fa-star"></i
                      ><i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex justify-content-between" onclick="addedToCart2(${item.id})">
                  <a href="#" class="btn btn-primary" 
                    ><span
                      ><i class="fa-solid fa-cart-shopping fa-bounce"></i
                    ></span>
                    add to cart
                  </a>
                  <span
                    id="fav-icon"
                    class="h4 fav-icon"
                    onclick="fillFaveIcon()"
                  >
                    <i class="fa-regular fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>
  </div>        
    `;
  });

  productsDom2.innerHTML = productsUi2;
}
drawUiProducts2();

let cartProductItem = document.querySelector(".carts-products");
let badgeDom = document.querySelector(".cart-notification");

function checkSignedInUser() {
  if (localStorage.getItem("fullName")) {
    window.location = "cartproducts.html";
  } else {
    Window.location = "/index.html";
  }
}

let addedItem = localStorage.getItem("productsInCart")
  ? JSON.parse(localStorage.getItem("productsInCart"))
  : [];
if (addedItem) {
  addedItem.map((item) => {
    cartProductItem.innerHTML += `<p>${item.title}</p>`;
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML += addedItem.length;
}
function addedToCart(id) {
  let choosenItem = products.find((item) => item.id === id);
  cartProductItem.innerHTML += `<p>${choosenItem.title}</p>`;

  addedItem = [...addedItem, choosenItem];
  localStorage.setItem("productsInCart", JSON.stringify(addedItem));
  let cartProductLength = document.querySelectorAll(".carts-products p");
  badgeDom.style.display = "block";
  badgeDom.innerHTML = cartProductLength.length;
}

function addedToCart2(id) {
  let choosenItem = products2.find((item) => item.id === id);
  cartProductItem.innerHTML += `<p>${choosenItem.title}</p>`;

  addedItem = [...addedItem, choosenItem];
  localStorage.setItem("productsInCart", JSON.stringify(addedItem));
  let cartProductLength = document.querySelectorAll(".carts-products p");
  badgeDom.style.display = "block";
  badgeDom.innerHTML = cartProductLength.length;
}
