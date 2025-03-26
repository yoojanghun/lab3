let pet = document.getElementById("pet");
let carousel = document.getElementById("carousel");
let product = document.getElementById("product");
let profile = document.getElementById("profile");

var petId = document.getElementById('pet-id');
var carouselId = document.getElementById('carousel-id');
var productId = document.getElementById('product-id');
var profileId = document.getElementById('profile-id');

petId.onclick = function() {
pet.style.display = "block";
carousel.style.display = "none";
product.style.display = "none";
profile.style.display = "none";
}

carouselId.onclick = function() {
pet.style.display = "none";
carousel.style.display = "block";
product.style.display = "none";
profile.style.display = "none";
}


const arrows = document.querySelectorAll(".arrow");  // 화살표
var slides = document.querySelectorAll("#slides > img");
var slides2 = document.querySelector("#slides");

let current = 0;  // 배열 인덱스
slides2.style.left = -current*600 + "px";

arrows.forEach( arrow => {
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "left") {  // 왼쪽 화살표 클릭?
      current--; // 이전 이미지로 이동
      if (current < 0) {  // 첫번째 이미지?
        current = slides.length - 1;  // 맨 마지막 이미지로 이동
      }      
    }
    else if (e.target.id == "right") {  // 오른쪽 화살표 클릭?
      current++;  // 다음 이미지로 이동
      if ( current >= slides.length ) {  // 마지막 이미지?
        current = 0;  // 첫번째 이미지로 이동
      }
    }
    slides2.style.left = -current*600 + "px";
  });
});


productId.onclick = function() {
  pet.style.display = "none";
  carousel.style.display = "none";
  product.style.display = "block";
  profile.style.display = "none";
  }
  
profileId.onclick = function() {
  pet.style.display = "none";
  carousel.style.display = "none";
  product.style.display = "none";
  profile.style.display = "block";
  }
  
