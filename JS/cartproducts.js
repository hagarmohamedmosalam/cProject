let productsDom = document.querySelector(".products");
let noProductDom = document.querySelector(".noProduct");
function drawUiCartProducts(allproducts = []) {
  if (JSON.parse(localStorage.getItem("productsInCart")).length === 0)
    noProductDom.innerHTML = "There Is No Items!";
  let products =
    JSON.parse(localStorage.getItem("productsInCart")) || allproducts;
  let productsUi = products.map((item) => {
    return `
<div class="row">
  <div class="col-sm-9 ">
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
                <div class="d-flex justify-content-between" onclick="removeFromCart(${item.id})">
                  <a href="#" class="btn btn-primary"  
                    ><span
                      ><i class="fa-regular fa-trash-can"></i></span>
                    Remove From Cart 
                  </a>
                  
                </div>
              </div>
            </div>
  </div> 
</div>         
    `;
  });

  productsDom.innerHTML = productsUi;
}
drawUiCartProducts();
function removeFromCart(id) {
  let productsInCart = localStorage.getItem("productsInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
    drawUiCartProducts(filteredItems);
  }
}
