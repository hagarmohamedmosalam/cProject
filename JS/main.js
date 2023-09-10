function checkSignedInUser() {
  if (localStorage.getItem("fullName")) {
    window.location = "cartproducts.html";
  } else {
    Window.location = "/signin-student.html";
  }
}
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
if(localStorage.getItem("themeMode") === "dark"){
  addCssDark();
  }else{
  localStorage.setItem("themeMode", "light");
  }
  function changeTheme(){
  if(localStorage.getItem("themeMode") === "light"){
  addCssDark();
  localStorage.setItem("themeMode", "dark");
  }else{
  document.getElementById("masdark").remove();
  document.getElementById("toggles").classList.remove("active");
  localStorage.setItem("themeMode", "light");
  document.getElementById("toggles").title = "Change to dark mode";
  }
  }
  function addCssDark(){
  document.head.innerHTML = document.head.innerHTML + '<style id="masdark">html, html * {color: #eeeeee !important; background-color: #292929 !important;} a {color: #8db2e5 !important;} a:visited {color: rgb(211, 138, 138) !important;} #toggles.active {background: #fff !important;}</style>';
  document.getElementById("toggles").classList.add("active");
  document.getElementById("toggles").title = "Change to light mode";
  }
  const translation = {
    en: {
        selectLang: "Select A Language",
        english: "English",
        arabic: "Arabic",
        sajeda: "Sajeda",
        follow: "Follow On Social Media",
        book: "Book Now",
        mohamed: "Mohamed",
        sondus: "Sondus",
        shifaa: "Shifaa",
        noor: "Noor",
        becomInstractor: "Become An Instractor!!",
        textInfo: "Instractors From around the world teach millions of students on learn more .",
        textInfo2: " we provide the tools and skills to teach what you love.",
        join: "Join",
    },
    ar: {
        selectLang: "اختر اللغة",
        english: "الانجليزية",
        arabic: "العربية",
        sajeda: "ساجدة",
        follow: "تابعنا على مواقع التواصل الاجتماعي",
        book: "احجز الان",
        mohamed: "محمد",
        sondus: "سندس",
        shifaa: "شفاء",
        noor: "نور",
        becomInstractor: "كن مدرب !!",
        textInfo: "يقوم المحاضرون من جميع أنحاء العالم بتعليم ملايين الطلاب على تعلم المزيد.",
        textInfo2: "وتوفر الأدوات والمهارات لتعليم ما تحب",
        join: "انضم الان",
        img: ""


    }
};
const languageSlector = document.querySelector("select");
languageSlector.addEventListener("change", (event) => {
    setLanguage (event.target.value);
});
const setLanguage = (language)=>{
    const elements=document.querySelectorAll("[data-translation]");
    elements.forEach((element)=>{
        const translationKey=element.getAttribute("data-translation");
        element.textContent= translation[language][translationKey];
    });
    if (language==='ar'){
        document.dir="rtl";
    }else{
        document.dir="defult";
    }
};