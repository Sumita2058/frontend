let [milisec, sec, min, hrs] = [0, 0, 0, 0];
let timRef = document.querySelector(".timeDisplay");
let init;
//implement start function
document.getElementById("starttimer").addEventListener("click", () => {
    init = setInterval(displayTimer,10);
});
function displayTimer() {
  milisec += 10;
  if (milisec === 1000) {
    milisec = 0;
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
  let ms =milisec < 10 ? "00" + milisec : milisec < 100 ? "0" + milisec : milisec;
  timRef.innerHTML = `${h}: ${m}: ${s}: ${ms}`;
}
// pause function
document.getElementById("pausetimer").addEventListener("click", ()=> {
    clearInterval(init);
});
// reset function
document.getElementById("resettimer").addEventListener("click", ()=> {
    clearInterval(init);
    milisec=0;
    sec=0;
    min=0;
    hrs=0;
    timRef.innerHTML="00.00.00.000";
});
