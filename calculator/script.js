/*document.addEventListener("keydown",(Event));
{
    const key = Event.key;
    const displayInput = document.getElementById("show");
    if(!isNaN(key) || ["+","-","*","/",".","enter","backspace","%"].includes(key))
    {
        if(!NaN(key)){
            displayInput.value+=key;
        }
        else if(["+","-","*","/","."].includes(key))
            {
            displayInput.value += key;
        }
        else if(key === "Enter")
        {
            try{
                displayInput.value=eval(display.value||"");
            }
            catch{
                displayInput.value="Error";
            }
        }
        else if(key==="Backspace")
        {
            displayInput.value= displayInput.value.toString().slice(0, -1);
            toString().slice(0, -1);
        }
    }
  else if(keylowerCase() ==='c'){
    displayInput.value=""

}
}*/
const cals = document.grtElementByID("cals");
function btn(button){
    display.value += button;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    display.value=eval(display.value)
}