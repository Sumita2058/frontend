//to bring images
const imageslider = document.querySelectorAll("img");
//access the next and previous buttons
const nextButton = document.querySelector(".next");
const preButton = document.querySelector(".pre");
const imagecontainer = document.querySelector(".image");
let counter=0;
let image;
//slider next
nextButton.addEventListener("click", sliderNext);
function sliderNext(){
     imageslider[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= imageslider.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  imageslider[counter].style.animation = "next2 0.5s ease-in forwards";

}

// sider pre
preButton.addEventListener("click", sliderPre);
function sliderPre() {
    imageslider[counter].style.animation = "pre1 0.5s ease-in forwards";
  if (counter === 0) {
    counter =imageslider.length - 1;
  } else {
    counter--;
  }
  imageslider[counter].style.animation = "pre2 0.5s ease-in forwards";

}
  