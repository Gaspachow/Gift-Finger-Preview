

//video script


var videocontainer = document.getElementById('myVideo');
var videocontainer2 = document.getElementById('myVideo2');
var videocontainer3 = document.getElementById('myVideo3');
var newmp4 = 'videos/2.mp4';
var myButton = document.querySelector('button');
var buttondisplay = 'block';
var header = document.getElementById('header');

videocontainer.addEventListener('ended',myHandler,false);
function myHandler(e) {
    videocontainer.pause();
    videocontainer2.setAttribute('class', "shown_video");
    //videocontainer.setAttribute('class', "hidden_video");
    videocontainer2.load();
    videocontainer2.play();
    videocontainer2.loop = true;
    myButton.style.display = buttondisplay;
    videocontainer.removeEventListener('ended',myHandler,false);
};

function fuckYou() {
    header.textContent = '';
    videocontainer.removeEventListener('ended',fuckYou,false);
}

//Button to open gift

myButton.onclick = function() {
    //videocontainer2.setAttribute('class','hidden_video');
    videocontainer3.setAttribute('class', 'shown_video')
    videocontainer3.load();
    videocontainer3.play();
    //newmp4 = 'videos/4.mp4'
    videocontainer3.loop = false;
    //videocontainer.addEventListener('ended',myHandler,false)
    //videocontainer.addEventListener('ended',fuckYou,false)
    buttondisplay = 'none';
    myButton.style.display = buttondisplay;

};

