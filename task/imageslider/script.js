//to bring images
const imageslider = document.querySelectorAll("img");
//access the next and previous buttons
const nextButton = document.querySelector(".next");
const preButton = document.querySelector(".pre");
const imagecontainer = document.querySelector(".image");
//slider next
nextButton.addEventListener("click", sliderNext);
function sliderNext(){
  