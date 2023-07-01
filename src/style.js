// проверка на сафари
const isSafari = navigator.userAgent.indexOf("Safari") > -1;
// проверка на айфон и айпад
const isIphoneOrIpad = navigator.userAgent.match(/iPhone|iPad|iPod/i);

const bigCircle = document.querySelectorAll('.big-circle');
const mediumCircle = document.querySelectorAll('.medium-circle');
const smallCircle = document.querySelectorAll('.small-circle');

if (isSafari || isIphoneOrIpad) {
    bigCircle.forEach(el => el.setAttribute('r', '27'));
mediumCircle.forEach(el => el.setAttribute('r', '21'));
smallCircle.forEach(el => el.setAttribute('r', '17'));
}