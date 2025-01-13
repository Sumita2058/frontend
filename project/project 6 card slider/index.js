//access the image
const sliderImage = document.getElementById("img");
//access the next and previous button
const nextbutton = document.querySelector(".next");
const preButton = document.querySelector(".pre");
const container = document.querySelector(".nature");
//indicator 
let nextdotContainer = document.querySelectorAll(".dot");
counter = 0;
let nature;
//slider next
nextbutton.addEventListener("click", sliderNext);
function sliderNext(){
    sliderImage[counter].style.animation ="next1 0.5s ease-in forwards";
   if (counter >= sliderImage.length -1){
    counter =0;
   }else{
    counter++;
   }
   sliderImage[counter].style.animation ="next2 0.5s ease-in forwards";
   updateindicator();
}
// sider pre
preButton.addEventListener("click", sliderPre);
function sliderPre() {
  sliderImage[counter].style.animation = "pre1 0.5s ease-in forwards";
  if (counter === 0) {
    counter = sliderImage.length - 1;
  } else {
    counter--;
  }
  sliderImage[counter].style.animation = "pre2 0.5s ease-in forwards";
  updateindicator();
}
// autoslider image
function autoslider() {
  natures = setInterval(sliderNext, 1000);
}
autoslider();

//stop autoslider on over
container.addEventListener("mouseover", function () {
  clearInterval(natures);
});
// resume autoslider
container.addEventListener("mouseout", autoslider);

// update indicator
function updateindicator() {
  nextdotContainer.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === counter) {
      dot.classList.add("active");
    }
  });
}
//add click event to the indicator
function switchImage(currentimg) {
  nextdotContainer.forEach((dot)=>dot.classList.remove('active'));
  currentimg.classList.add('active');
  let imageId = parseInt(currentimg.getAttribute('attr'),10)
  if(imageId>counter){
    sliderImage[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = imageId
    sliderImage[counter].style.animation = "next2 0.5s ease-in forwards";

  }else if(imageId<counter){
    sliderImage[counter].style.animation = "pre1 0.5s ease-in forwards";
    counter = imageId
    sliderImage[counter].style.animation = "pre2 0.5s ease-in forwards";
  }
  updateindicator()
}
