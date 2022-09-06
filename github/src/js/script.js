const productContainers = [...document.querySelectorAll(
    '.product-container'
)];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


productContainers.forEach((item,i) => {
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth= containerDimensions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })
    function next() {
        item.scrollLeft += containerWidth;
    }


    setTimeout (next,5000)
    

})

const dateYear = new Date();
document.getElementById("date-year").innerHTML=dateYear.getFullYear();

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
let loadMoreContainer = document.getElementById("load-more-container")
let pageCounter =1;

btn.addEventListener("click",function() {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://yunusemre347.github.io/osfjson/db.json');
    ourRequest.onload = function() {
        let ourData = JSON.parse(ourRequest.responseText)
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;

});

function renderHTML(data){
    let htmlString = "";

    for (i = 0 ; i <data.length; i++) {
        htmlString += "<div class=\"main-product-card\"><div class=\"main-product-image\"><img src=\"/images/"+data[i].images+"\"  alt=\"product\"></div><p class=\"main-product-short-description\">"+data[i].description+"</p><p class=\"price\">$ "+ data[i].price + "</p> <div class=\"overlay\"><div class=\"cart-button\"><img src=\"/images/plus.jpg\" alt=\"plus\"></div><div class=\"favourite-button\"><img src=\"/images/red-heart.jpg\" alt=\"heart\"></div></div></div>"
        
        
        "<p>" + data [i].name + "\" is a" +data[i].species+ ".</p>";
    
    
    }

    loadMoreContainer.insertAdjacentHTML('beforeend',htmlString)


    if (pageCounter > 1) {
        btn.classList.add("hide-me")
    }
    

}

