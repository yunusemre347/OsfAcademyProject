const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
  function next() {
    item.scrollLeft += containerWidth;
  }

  setTimeout(next, 5000);
  setTimeout(next, 10000);
});

const dateYear = new Date();
document.getElementById("date-year").innerHTML = dateYear.getFullYear();

// const btn = document.querySelector('#btn');
//  const output= document.querySelector('.load-more-container');
// const url='data.json';

//  console.log(btn);
//  btn.onclick =()=>{
//     console.log('clicked');
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>{
//        console.log(data);
//     })
//  }

let btn = document.getElementById("load-more-btn");
let loadMoreContainer = document.getElementById("load-more-container");
let pageCounter = 1;

btn.addEventListener("click", function () {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "https://yunusemre347.github.io/osfjson/db.json");
  ourRequest.onload = function () {
    let ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
});

function renderHTML(data) {
  let htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString +=
      '<div class="main-product-card"><div class="main-product-image"><img src="/images/' +
      data[i].images +
      '"  alt="product"></div><p class="main-product-short-description">' +
      data[i].description +
      '</p><p class="price">$ ' +
      data[i].price +
      '</p> <div class="overlay"><div class="cart-button"><img src="/images/plus.jpg" alt="plus"></div><div class="favourite-button"><img src="/images/red-heart.jpg" alt="heart"></div></div></div>';
  }

  loadMoreContainer.insertAdjacentHTML("beforeend", htmlString);

  if (pageCounter > 1) {
    btn.classList.add("hide-me");
  }
}

let favCountBtn = document.querySelectorAll(".favourite-button");
let favCountNum = document.getElementById("favourites");

for (let i = 0; i < favCountBtn.length; i++) {
  favCountBtn[i].addEventListener("click", favCountUp);
}

function favCountUp() {
  favCountNum.innerHTML++;
}

let cartCountBtn = document.querySelectorAll(".cart-button");
let cartCountNum = document.getElementById("cart");

for (let i = 0; i < cartCountBtn.length; i++) {
  cartCountBtn[i].addEventListener("click", cartCountUp);
}

function cartCountUp() {
  cartCountNum.innerHTML++;
}

let cookieModal = document.querySelector(".cookie-consent-modal");
let exitCookieBtn = document.querySelector(".exit-cookie");
let acceptCookieBtn = document.querySelector(".accept-cookie");

exitCookieBtn.addEventListener("click", function () {
  cookieModal.classList.remove("active");
});

acceptCookieBtn.addEventListener("click", function () {
  cookieModal.classList.remove("active");
  localStorage.setItem("cookieAccepted", "yes");
});

setTimeout(function () {
  let cookieAccepted = localStorage.getItem("cookieAccepted");
  if (cookieAccepted != "yes") {
    cookieModal.classList.add("active");
  }
}, 2000);

function eyeFunction() {
  let password = document.getElementById("password");
  let hide = document.getElementById("hide1");
  let show = document.getElementById("hide2");

  if (password.type === "password") {
    password.type = "text";
    hide.style.display = "block";
    show.style.display = "none";
  } else {
    password.type = "password";
    hide.style.display = "none";
    show.style.display = "block";
  }
}

let user = document.querySelector(".user-container");
let login = document.querySelector(".login-modal");
let lgnBtn = document.querySelector("login-button");

function signIn() {
  login.classList.add("active");
}

function hideLogin() {
  login.classList.remove("active");
}

user.addEventListener("click", signIn);
// lgnBtn.addEventListener("click",hideLogin);

const toggleMenu = document.getElementsByClassName("toggle-menu")[0];
const mobileMenu = document.getElementsByClassName("mobile-dropdown-menu")[0];
// class birden fazla olabileceği için ilkini seçmiş olduk
toggleMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const serviceToggle = document.getElementsByClassName(
  "services-toggle-button"
)[0];
const prdctCtgr = document.getElementsByClassName("product-categories")[0];
const sale = document.getElementsByClassName("sale")[0];
serviceToggle.addEventListener("click", () => {
  prdctCtgr.classList.toggle("active");
  sale.classList.toggle("active");
});

const productSubProduct = document.getElementsByClassName("sub-product")[0];
const saleSubProduct = document.getElementsByClassName("sub-sale")[0];

prdctCtgr.addEventListener("click", () => {
  productSubProduct.classList.toggle("active");
});
sale.addEventListener("click", () => {
  saleSubProduct.classList.toggle("active");
});
