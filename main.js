document.onmouseover = function(event) {
    var et = event.target;
    if (et.className == 'mainAdv') {
        showAdv(event);
    } else if (et.className != 'mainAdv' && et.className != 'top' && et.className != 'right' && et.className != 'bot' && et.className != 'left') {
        hideAdv(event);
    }
}

var adv_text = 'ADVERTISING. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ad, cum. Incidunt harum mollitia assumenda, maxime, unde quaerat voluptatibus. Illo temporibus aut quasi blanditiis eaque, officia quibusdam pariatur porro doloribus.';

function showAdv(a) {
    if (a.offsetX > 295) {
        document.querySelector('.right').style.right = 0;
        document.querySelector('.right').innerHTML = adv_text;
    } else if (a.offsetX < 5) {
        document.querySelector('.left').style.left = 0;
        document.querySelector('.left').innerHTML = adv_text;
    } else if (a.offsetY < 5) {
        document.querySelector('.top').style.top = 0;
        document.querySelector('.top').innerHTML = adv_text;
    } else if (a.offsetY > 295) {
        document.querySelector('.bot').style.bottom = 0;
        document.querySelector('.bot').innerHTML = adv_text;
    }
}

function hideAdv(b) {
    document.querySelector('.right').style.right = '-300px';
    document.querySelector('.left').style.left = '-300px';
    document.querySelector('.top').style.top = '-300px';
    document.querySelector('.bot').style.bottom = '-300px';
}