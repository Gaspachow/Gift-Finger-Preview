

//video script


var videocontainer = document.getElementById('myVideo');
var newmp4 = 'videos/2.mp4';
var myButton = document.querySelector('button')
var buttondisplay = 'block'
var header = document.getElementById('header')

videocontainer.addEventListener('ended',myHandler,false);
function myHandler(e) {
    videocontainer.pause();
    videocontainer.setAttribute('src', newmp4);
    videocontainer.load();
    videocontainer.play();
    videocontainer.loop = true;
    myButton.style.display = buttondisplay;
    videocontainer.removeEventListener('ended',myHandler,false);
};

function fuckYou() {
    header.textContent = 'Fuck you, buddy.';
    videocontainer.removeEventListener('ended',fuckYou,false);
}

//Button to open gift

myButton.onclick = function() {
    videocontainer.setAttribute('src','videos/3.mp4');
    newmp4 = 'videos/4.mp4'
    videocontainer.loop = false;
    videocontainer.addEventListener('ended',myHandler,false)
    videocontainer.addEventListener('ended',fuckYou,false)
    buttondisplay = 'none';
    myButton.style.display = buttondisplay;

};

