document.onmouseover = function(event) {
    // console.log(e);
    if (event.target.className == 'mainAdv') {
        showAdv(event);
    } else {
        // hideAdv(event.target);
    }
}

function showAdv(a) {
    console.log(a);
    console.log('mainAdv-block');
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
    // console.log(b);
    // if (b != document.querySelector('.mainAdv')) {
    //     // onmouseover() = false;
    //     document.querySelector('.right').style.right = '-300px';

    //     document.querySelector('.left').style.left = '-300px';

    //     document.querySelector('.top').style.top = '-300px';

    //     document.querySelector('.bot').style.bottom = '-300px';
    // }
}