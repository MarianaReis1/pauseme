//Breath Guide

const container = document.querySelector('.container');
const pointer = document.querySelector('.pointer-container');
const text = document.querySelector('#text');
const totalTime = 8000;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function startBreatheAnimation() {
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

// Video Play Function 

let video = document.getElementById('video');
let playBtn = document.querySelector('.playVideoBtn');

playBtn.addEventListener("click", function(){
    console.log("testing add");
    video.play();
});

// Video Source

const videoSrc = document.getElementById('video');

const content1 = document.querySelector('.contentBox1');
const content2 = document.querySelector('.contentBox2');
const content3 = document.querySelector('.contentBox3');
const content4 = document.querySelector('.contentBox4');

function showInnerPage(){
    return document.getElementById('innerPageBody').style.display = "block";
}



content1.addEventListener("click", function(){
    showInnerPage()
    console.log('testing beach');
    videoSrc.src = "./src/beach/beach-video-mobile.mp4";
});
content2.addEventListener("click", function(){
    showInnerPage()
    console.log('testing cozy rain');
    videoSrc.src = "./src/rain/rain-video-mobile.mp4";
});
content3.addEventListener("click", function(){
    showInnerPage()
    console.log('testing birds');
    videoSrc.src = "./src/birds/birds-video-mobile.mp4";
});
content4.addEventListener("click", function(){
    showInnerPage()
    console.log('testing waterfall');
    videoSrc.src = "./src/waterfall/waterfall-video-mobile.mp4";
});


