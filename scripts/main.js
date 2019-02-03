

//video script


var videocontainer = document.getElementById('myVideo');
var videocontainer2 = document.getElementById('myVideo2');
var videocontainer3 = document.getElementById('myVideo3');
var videocontainer4 = document.getElementById('myVideo4');
var myButton = document.querySelector('button');
var buttondisplay = 'block';
var header = document.getElementById('header');

videocontainer.addEventListener('ended',replaceVid,false);

function replaceVid(e) {
    videocontainer.pause();
    videocontainer2.setAttribute('class', "shown_video");
    videocontainer2.load();
    videocontainer2.play();
    videocontainer2.loop = true;
    myButton.style.display = buttondisplay;
    videocontainer.removeEventListener('ended',replaceVid,false);
};

function replaceVidIdle(e) {
    videocontainer.pause();
    videocontainer4.setAttribute('class', "shown_video");
    videocontainer4.load();
    videocontainer4.play();
    videocontainer4.loop = true;;
};


//Button to open gift

myButton.onclick = function() {
    videocontainer3.setAttribute('class', 'shown_video')
    videocontainer3.load();
    videocontainer3.play();
    videocontainer3.loop = false;
    buttondisplay = 'none';
    myButton.style.display = buttondisplay;
    videocontainer3.addEventListener('ended',replaceVidIdle,false)

};



// Time display function

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // add a zero in front of numbers<10
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();