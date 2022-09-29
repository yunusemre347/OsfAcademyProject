

const dateYear = new Date();
document.getElementById("date-year").innerHTML=dateYear.getFullYear();



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
// let lgnContainer=document.querySelector(".login");

function signIn() {
  login.classList.add("active");
}

function hideLogin() {
  login.classList.remove("active");
}

 login.addEventListener('click',function(event) {
   if(event.target.closest('.login'))return
   login.classList.remove('active')
  });

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



function renderHTML(data){
    let htmlString = "";

    for (i = 0 ; i <data.length; i++) {
        htmlString += "<div class=\"main-product-card\"><div class=\"main-product-image\"><img src=\"/images/"+data[i].images+"\"  alt=\"product\"></div><p class=\"main-product-short-description\">"+data[i].description+"</p><p class=\"price\">$ "+ data[i].price + "</p> <div class=\"overlay\"><div class=\"cart-button\"><img src=\"/images/plus.jpg\" alt=\"plus\"></div><div class=\"favourite-button\"><img src=\"/images/red-heart.jpg\" alt=\"heart\"></div></div></div>"
    
    }

    loadMoreContainer.insertAdjacentHTML('beforeend',htmlString)


    if (pageCounter > 1) {
        btn.classList.add("hide-me")
    }
    

}


let favCountBtn = document.querySelectorAll(".favourite-button");
let favCountNum = document.getElementById("favourites");

for (let i =0; i<favCountBtn.length;i++) {

    favCountBtn[i].addEventListener('click',favCountUp);
}

function favCountUp () {
    favCountNum.innerHTML ++ ;
}


let cartCountBtn = document.querySelectorAll(".cart-button");
let cartCountNum = document.getElementById("cart");

for (let i =0; i<cartCountBtn.length;i++) {

    cartCountBtn[i].addEventListener('click',cartCountUp);
}

function cartCountUp () {
    cartCountNum.innerHTML ++ ;
}


let addToCart=document.getElementById('add-to-cart');

function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumValue = parseInt(totalClicks.innerText)+ click;
    console.log(sumValue );
    totalClicks.innerText = sumValue;

    //avoid negative

    if(sumValue<0){
        totalClicks.innerText = 0;
    }

}

addToCart.addEventListener('click', function(click){
    const totalClicks = document.getElementById('totalClicks');
    const sumValue = parseInt(totalClicks.innerText)+ click;
    cartCountNum.innerHTML= parseInt(cartCountNum.innerHTML)+parseInt(totalClicks.innerText);

})

//zoom functions*****
const zoomBtn= document.querySelectorAll('.zoom-div');
const zoomOverlay=document.querySelectorAll('.zoom-overlay');
const zoomImage=document.querySelectorAll('.zoom-image');


function showZoomFirst(){
  zoomOverlay[0].classList.add('active');
};
function showZoomSecond(){
  zoomOverlay[1].classList.add('active');
};
function showZoomThird(){
  zoomOverlay[2].classList.add('active');
};
function showZoomFourth(){
  zoomOverlay[3].classList.add('active');
};
zoomBtn[0].addEventListener('click',showZoomFirst);
zoomOverlay[0].addEventListener('click',function(event) {
  if(event.target.closest('.zoom-image'))return
  zoomOverlay[0].classList.remove('active')
});
zoomBtn[1].addEventListener('click',showZoomSecond);
zoomOverlay[1].addEventListener('click',function(event) {
  if(event.target.closest('.zoom-image'))return
  zoomOverlay[1].classList.remove('active')
});
zoomBtn[2].addEventListener('click',showZoomThird);
zoomOverlay[2].addEventListener('click',function(event) {
  if(event.target.closest('.zoom-image'))return
  zoomOverlay[2].classList.remove('active')
});
zoomBtn[3].addEventListener('click',showZoomFourth);
zoomOverlay[3].addEventListener('click',function(event) {
  if(event.target.closest('.zoom-image'))return
  zoomOverlay[3].classList.remove('active')
});
//zoom functions end******

function printer(){
  window.print();
}

