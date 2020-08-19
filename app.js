// Breath Guide

const container = document.querySelector('.container');
const pointer = document.querySelector('.pointer-container');
const text = document.querySelector('#text');
const totalTime = 8000;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function startBreatheGuide() {
    if(pointer.className === 'pointer-container'){
        breatheGuide();
    } else {
        pointer.className = 'pointer-container pointer-animation'
        reset()
    }
} 

function reset(){
    document.location.href="";
}
 
function breatheGuide(){
    pointer.className = 'pointer-container pointer-animation';
    text.innerHTML = 'Breath In';
    container.className = 'container grow';
    
    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath Out!';
            container.className = 'container shrink';
        }, holdTime)
    }, breathTime)

    setInterval(breatheGuide, totalTime);
}


//Show Inner Page when any Scene is selected
function showInnerPage(){
    return document.getElementById('innerPageBody').style.display = "block";
}

// Play Video Function 

let video = document.getElementById('video');
let playBtn = document.querySelector('.playVideoBtn');

playBtn.addEventListener("click", function(){
    video.play();
});


// Video Source (SECOND VERSION)

const videoSrc = document.getElementById('video');

function getIdAndLoadData(idSelected) {
    const videoSelected = document.getElementById(idSelected);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200  || xhr.status == 304){
            let objJS = JSON.parse(xhr.responseText)
            videoSelected.addEventListener("click", function(){
                if(window.innerWidth < 992){
                    showInnerPage()
                    videoSrc.src = objJS.mobile[idSelected];
                } else {
                    videoSrc.src = objJS.desktop[idSelected];
                }

            });
        }
    }
    
    xhr.open("GET", "data.json", true);
    xhr.send();
}










//FIRST VERSION FOR JS SELECTION OF VIDEOS (HARDCODED)


// const content1 = document.getElementById('beach');
// const content2 = document.getElementById('rain');
// const content3 = document.getElementById('birds');
// const content4 = document.getElementById('waterfall');


// content1.addEventListener("click", function(){
//     showInnerPage()
//     // console.log('testing beach');
//     videoSrc.src = "./src/beach/beach-video-mobile.mp4";
// // });
// content2.addEventListener("click", function(){
//     showInnerPage()
//     console.log('testing cozy rain');
//     videoSrc.src = "./src/rain/rain-video-mobile.mp4";
// });
// content3.addEventListener("click", function(){
//     showInnerPage()
//     console.log('testing birds');
//     videoSrc.src = "./src/birds/birds-video-mobile.mp4";
// });
// content4.addEventListener("click", function(){
//     showInnerPage()
//     console.log('testing waterfall');
//     videoSrc.src = "./src/waterfall/waterfall-video-mobile.mp4";
// });


