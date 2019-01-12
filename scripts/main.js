
//Button to change name
var myButton = document.querySelector('button')
myButton.onclick = function() {
    video2();
};

//video script


var videocontainer = document.getElementById('myVideo');
var newmp4 = 'videos/2.mp4';

videocontainer.addEventListener('ended',myHandler,false);
function myHandler(e) {
    videocontainer.pause();
    videocontainer.setAttribute('src', newmp4);
    videocontainer.load();
    videocontainer.play();
    videocontainer.loop = true;
    videocontainer.removeEventListener('ended',myHandler,false);
}