// проверка на сафари
const isSafari = navigator.userAgent.indexOf("Safari") > -1;
// проверка на айфон и айпад
const isIphoneOrIpad = navigator.userAgent.match(/iPhone|iPad|iPod/i);
// проверка на хром
const isChrome = navigator.userAgent.indexOf("Chrome") > -1;

const bigCircle = document.querySelectorAll('.big-circle');
const mediumCircle = document.querySelectorAll('.medium-circle');
const smallCircle = document.querySelectorAll('.small-circle');

if (isSafari || isIphoneOrIpad) {
    bigCircle.forEach(el => el.setAttribute('r', '27'));
mediumCircle.forEach(el => el.setAttribute('r', '21'));
smallCircle.forEach(el => el.setAttribute('r', '17'));
}

if (isChrome){
    bigCircle.forEach(el => el.setAttribute('r', '33.5'));
mediumCircle.forEach(el => el.setAttribute('r', '24'));
smallCircle.forEach(el => el.setAttribute('r', '21'));
}