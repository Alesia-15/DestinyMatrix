'use strict';
// ставит ограничитель в календаре на даты, которые не наступили
let today = new Date();
document.getElementById('date_person1').setAttribute("max", today.toLocaleDateString("en-CA"));
document.getElementById('date_person2').setAttribute("max", today.toLocaleDateString("en-CA"));

// ставит ограничитель в календаре на даты, которые были раньше 120 лет назад
let ancientDate = new Date (today.getFullYear() - 120, today.getMonth(), today.getDay());
document.getElementById('date_person1').setAttribute("min", ancientDate.toLocaleDateString("en-CA"));
document.getElementById('date_person2').setAttribute("min", ancientDate.toLocaleDateString("en-CA"));


const btnChart = document.getElementById('createChart');

// кнопка для рассчёта совместимости
btnChart.addEventListener('click', (evt) => {
    evt.preventDefault();

    const date1 = new Date(document.getElementById('date_person1').value);
    const date2 = new Date(document.getElementById('date_person2').value);
    const output2 = document.querySelector('.output2');

    //ограничение на разницу в возрасте не больше 70 лет
    const ageDifference = Math.abs(date1.getFullYear() - date2.getFullYear());

    if(ageDifference >= 71) {
        output2.innerHTML = 'The age difference is too big.';
    } else {
        output2.innerHTML = date1.toLocaleDateString("ru") + ' ' + '+' + ' ' + date2.toLocaleDateString("ru");
    }

    document.forms.form.reset();
});