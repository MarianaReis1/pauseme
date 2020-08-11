//Breath Guide

const container = document.querySelector('.container');
const pointer = document.querySelector('.pointer-container');
const text = document.querySelector('#text');
const totalTime = 8000;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function startbreatheAnimation() {
    if(pointer.className === 'pointer-container'){
        breatheAnimation();
    } else {
        pointer.className = 'pointer-container pointer-animation'
        reset()
    }
} 

function reset(){
    document.location.href="";
}
 
function breatheAnimation(){
    pointer.className = 'pointer-container pointer-animation';
    console.log("started")
    text.innerHTML = 'Breath In';
    container.className = 'container grow';
    
    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath Out!';
            container.className = 'container shrink';
        }, holdTime)
    }, breathTime)

    setInterval(breatheAnimation, totalTime);
}

// video function 

let video = document.getElementById('video');
let playBtn = document.getElementById('playVideoBtn');

playBtn.addEventListener("click", function(){
    console.log("testing add");
    video.play();
});



