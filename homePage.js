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

