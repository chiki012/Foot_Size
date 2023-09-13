const hamburger = document.getElementById('menubar');
const close = document.getElementById('closeBtn');
const nav = document.getElementById('navbar');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// Product Details Script:
var BigImage = document.getElementById('BigImage');
var otherImages = document.getElementsByClassName('otherImage');

otherImages[0].onclick = function () {
    BigImage.src = otherImages[0].src;
}

otherImages[1].onclick = function () {
    BigImage.src = otherImages[1].src;
}

otherImages[2].onclick = function () {
    BigImage.src = otherImages[2].src;
}

otherImages[3].onclick = function () {
    BigImage.src = otherImages[3].src;
}



