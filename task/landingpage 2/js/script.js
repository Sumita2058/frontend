//navbar
const navDialog = document.getElementById("nav-dialog");
function handlemenu() {
  navDialog.classList.toggle("hidden");
}


//date
document.getElementById("date").innerHTML = new Date().getFullYear();