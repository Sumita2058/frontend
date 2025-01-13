//document.getElementById("myimage").src='image/bulb-off.png'
/*document.getElementById("myimage").src='image/bulb-on.png'
function changeImage(){
    let image=document.getElementById("myImage");
    if(image.src.includes("image/bulb-off.png"))
{
    image.src="image/bulb-on.png"
}
else{
    image.src="image/bulb-off.png"
}
}*/
/*function changeImage(){
    let image=document.getElementById("myimg").addEventListener("click" <={

})
}
let button = document.getElementById("btn").addEventListener("onclick");
function changeImage(){
    
    if(btn.src.includes("image/bulb-off.png"))
        {
            btn.src="image/bulb-on.png"
        }
        else{
            btn.src="image/bulb-off.png"
        }

}*/
function btnon(){
    let image = document.getElementById("myimage");
    let bulbon = document.getElementById("on");
    let bulboff = document.getElementById("off");
    
    image.src = "image/bulb-on.png";
    bulbon.style.backgroundColor = "gray"

   /* btnon.style.background-color; "yellow"
    btnoff.style.background-color; "transparent"*/
}
function btnoff(){
    let image = document.getElementById("myimage");
    let bulbon = document.getElementById("on");
    let bulboff = document.getElementById("off");
    
    image.src = "image/bulb-off.png";
    bulboff.style.backgroundColor = "gray"
    /*btnon.style.background-color;"transparent"
    btnoff.style.background-color; "yellow"*/
} 