// Content

let content = {
    beach: {
        "name": "Beach Sunset",
        "video--mobile": "./src/beach/beach-video-mobile.mp4",
        "video--desktop": "./src/beach/beach-video-desktop.mp4",
        "img--thumbnail": "./src/beach/beach-thumbnail.png"
    },
    rain: {
        "name": "Cozy Rain",
        "video--mobile": "./src/rain/rain-video-mobile.mp4",
        "video--desktop": "./src/rain/rain-video-desktop.mp4",
        "img--thumbnail": "./src/rain/rain-thumbnail.png"
    },
    birds: {
        "name": "Birds Energy",
        "video--mobile": "./src/birds/birds-video-mobile.mp4",
        "video--desktop": "./src/birds/birds-video-desktop.mp4",
        "img--thumbnail": "./src/birds/birds-thumbnail.png"
    },
    waterfall: {
        "name": "Zen Waterfall",
        "video--mobile": "./src/waterfall/waterfall-video-mobile.mp4",
        "video--desktop": "./src/waterfall/waterfall-video-desktop.mp4",
        "img--thumbnail": "./src/waterfall/waterfall-thumbnail.png"
    }
}


// Breath Guide

const container = document.querySelector('.container');
const pointer = document.querySelector('.pointer-container');
const text = document.querySelector('#text');
const totalTime = 9000;
const breathTime = 4000;
const holdTime = 1000;

function startBreatheGuide() {
    let startGuide = "";
    if (pointer.className === 'pointer-container') {
        breatheGuide();
        startGuide = setInterval(breatheGuide, totalTime);
        console.log("calling breath guide")
    } else {
        pointer.className = 'pointer-container pointer-animation'
        document.location.href = "";
    }
}


function breatheGuide() {
    pointer.className = 'pointer-container pointer-animation';
    text.innerHTML = 'Breath In';
    container.className = 'container grow';
    console.log("starting breath guide")


    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath Out!';
            container.className = 'container shrink';
        }, holdTime)
    }, breathTime)
}


//Show Inner Page when any Scene is selected
function showInnerPage() {
    document.getElementById('innerPageBody').style.display = "block";
    document.getElementById('homeBody').style.display = "none";
}

// Play Video Function 

const video = document.getElementById('video');
const playBtn = document.querySelector('.playVideoBtn');
const videoSrc = document.getElementById('video');

playBtn.addEventListener("click", function () {
    video.play();
});

//Selecting the scene and fetchin it from the database

//THIRD VERSION (using Fetch API) - last version, shorted and way more effective and ux friendly. 

function sceneSelected(id) {
    fetch("./data.json")
        .then(response => response.json())
        .then(data => console.log(data, id))
        .then(showInnerPage())
        .then(videoSrc.src = './src/' + id + '/' + id + '-video-desktop.mp4')
}


//SECOND VERSION (using XMLHttpRequest) - had to use double click, so it wasn't practicle and ux friendly.

// function getIdAndLoadData(idSelected) {
//     const videoSelected = document.getElementById(idSelected);
//     console.log(videoSelected)

//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
//             let objJS = JSON.parse(xhr.responseText)
//             videoSelected.addEventListener("click", function () {
//                 showInnerPage()
//                 if (window.innerWidth < 992) {
//                     videoSrc.src = objJS.mobile[idSelected];
//                 } else {
//                     videoSrc.src = objJS.desktop[idSelected];
//                 }

//             });
//         }
//     }

//     xhr.open("GET", "data.json", true);
//     xhr.send();
// }



//FIRST VERSION (HARDCODED) - Here first I hardcoded each scene,
// just to start and to understand the idea of the app, 
// so later i could improve and adapt to a more  


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


