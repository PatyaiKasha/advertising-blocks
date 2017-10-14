document.onmouseover = function(event) {
    var et = event.target;
    if (et.className == 'mainAdv') {
        showAdv(event);
    } else if (et.className != 'mainAdv' && et.className != 'top' && et.className != 'right' && et.className != 'bot' && et.className != 'left') {
        hideAdv(event);
    }
}

function showAdv(a) {
    console.log(a);
    console.log(a.target.className);
    if (a.offsetX > 295) {
        document.querySelector('.right').style.right = 0;
    } else if (a.offsetX < 5) {
        document.querySelector('.left').style.left = 0;
    } else if (a.offsetY < 5) {
        document.querySelector('.top').style.top = 0;
    } else if (a.offsetY > 295) {
        document.querySelector('.bot').style.bottom = 0;
    }
}

function hideAdv(b) {
    document.querySelector('.right').style.right = '-300px';
    document.querySelector('.left').style.left = '-300px';
    document.querySelector('.top').style.top = '-300px';
    document.querySelector('.bot').style.bottom = '-300px';
}