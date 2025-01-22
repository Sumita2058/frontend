let song= new Audio("music/4.mp3");
let range = document.getElementById("range");
let playBtn = document.getElementById("playBtn");
let gif = document.getElementById("gif");
let upperAudio=document.querySelectorAll(".audio");
let music = document.getElementById(".music");
let addName= document.getElementById("name");

let album =[
    {songName: "first song"},
    {songName: "second song"},
    {songName: "third song"},
    {songName: "fourth song"},
];
playBtn.addEventListener("click", function(){
    if(song.paused || song.currentTime <= 0){
        song.play();
        gif.style.opacity = "1";
        // console.log(song.duration / 60);
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-play");
    

        setInterval(function(){
            //convert duration into percentage
          var percent = (song.currentTime / song.duration) * 100;
          console.log(percent);
          range.value=percent; 
        }, 1000);
    }else{
        music.pause();
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-play");
        gif.style.opacity="0";
        gif.style.transition="0.3";

    }
});
//convert percentage into duration
range.addEventListener("click", function(){
    song.currentTime = (range.value * song.duration)/100;
});
upperAudio.forEach(function (element){
    // console.log(element.classList);

    element.addEventListener("click", function (e){
        if(element.classList[2] == "fa-play"){
            let index = parseInt(e.target.id);
            element.classList.remove("fa-play");
            element.classList.add("fa-play");

            song.src = `music/${index + 1}.mp3`;
            song.play();
            song.currentTime =0;
            range.value =0;
            addName.innerText = element.parentElement.previousElementSibling.innerText;
            gif.style.opacity ="1";

            playBtn.classList.remove("fa-play");
            playBtn.classList.add("fa-play");
        }else{
            song.pause();
            element.classList.remove("fa-play");
            element.classList.add("fa-play");
            
            playBtn.classList.remove("fa-play");
            playBtn.classList.add("fa-play");
            gif.style.opacity="0";
        }
    });
});