

const dateYear = new Date();
document.getElementById("date-year").innerHTML = dateYear.getFullYear();


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



// let productTwoQuantity=document.getElementById('product-two-quantity');
const productPriceTwo=document.getElementById('product-price-two');
const productPriceOne=document.getElementById('product-price-one');
let itemCostOne=document.querySelector('.item-cost-one');
let itemCostTwo=document.querySelector('.item-cost-two');
let productTwoQuantity = document.getElementById('product-two-quantity');
let productOneQuantity = document.getElementById('product-one-quantity');
const calcButton=document.querySelector('.plus-minus-button');
const cartSubTotal=document.querySelector('.cart-subtotal');
const removeItemOne=document.querySelector('.remove-item-one');
const removeItemTwo=document.querySelector('.remove-item-two');
const cartProduct=document.querySelectorAll('.cart-product');




let totalSum=document.querySelector('.order-total');
let cartRadioButtons=document.querySelectorAll("input[name='shipping']");
let shippingCost;

let findSelected= () => {
  let selected = document.querySelector("input[name='shipping']:checked").value;
 
  totalSum.innerText= parseFloat(cartSubTotal.innerText)+parseFloat(selected);
  console.log(selected);

}
 cartRadioButtons.forEach(radioBtn=>{
 radioBtn.addEventListener("change", findSelected);
 });



function productOneCounter(click) {
  const productOneQuantity = document.getElementById('product-one-quantity');
  const sumValue = parseInt(productOneQuantity.innerText)+ click;
 
  productOneQuantity.innerText = sumValue;
 

  //avoid negative

  if(sumValue<1){
    productOneQuantity.innerText = 1;
  }

  itemCostOne.innerText=parseFloat(productOneQuantity.innerText)*parseFloat(productPriceOne.innerText);
  cartSubTotal.innerText=parseFloat(itemCostOne.innerText)+parseFloat(itemCostTwo.innerText);
  findSelected();
}

function productTwoCounter(click) {
  const productTwoQuantity = document.getElementById('product-two-quantity');
  const sumValue = parseInt(productTwoQuantity.innerText)+ click;

  productTwoQuantity.innerText = sumValue;

  //avoid negative

  if(sumValue<1){
    productTwoQuantity.innerText = 1;
  }

  itemCostTwo.innerText=parseFloat(productTwoQuantity.innerText)*parseFloat(productPriceTwo.innerText);
  cartSubTotal.innerText=parseFloat(itemCostOne.innerText)+parseFloat(itemCostTwo.innerText);
  findSelected();
}

removeItemOne.addEventListener('click',function(){
 cartProduct[0].classList.add('hide');
 itemCostOne.innerText=0;
 cartSubTotal.innerText=parseFloat(itemCostOne.innerText)+parseFloat(itemCostTwo.innerText);
 findSelected();
})

removeItemTwo.addEventListener('click',function(){
  cartProduct[1].classList.add('hide');
  itemCostTwo.innerText=0;
  cartSubTotal.innerText=parseFloat(itemCostOne.innerText)+parseFloat(itemCostTwo.innerText);
  findSelected();
 })
 
