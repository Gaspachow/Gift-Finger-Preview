var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/calvin.jpg') {
        myImage.setAttribute ('src','images/calvin2.jpg');
    } else {
        myImage.setAttribute ('src','images/calvin.jpg');
    }
}

//Button to change name
myButton.onclick = function() {
    setUserName();
}