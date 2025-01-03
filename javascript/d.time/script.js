let [milis, sec, min, hrs] = [0, 0, 0, 0];
let timRef = document.querySelector(".timer");
let init;
//start function
document.getElementById("starttimer").addEventListener("click", () => {
  init = setInterval(displayTimer,10);
});
function displayTimer() {
  milis += 10;
  if (milis === 1000) {
    milis = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
      if (min === 60) {
        min = 0;
        hrs++;
      }
    }
  }
let h = hrs < 10 ? "0" + hrs : hrs;
let m = min < 10 ? "0" + min : min;
let s = sec < 10 ? "0" + sec : sec;
let ms = milis < 10 ? "0" + milis : milis < 100 ? "00" + milis : milis;
timRef.innerHTML = `${h}: ${m}: ${s}: ${ms}`;
}
  //pause function
  document.getElementById("stoptimer").addEventListener("click", () => {
   console.log("sdefrgth")
    clearInterval(init);
  });
//reset function
document.getElementById("resettimer").addEventListener("click", () =>{ 
    clearInterval(init)
    milis=0;
    sec=0;
    min=0;
    hrs=0;
    timRef.innerHTML="00.00.00.000";
  });
