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
    const wrongDate = document.querySelector('.wrongDate');
    const output2 = document.querySelector('.output2');
    const response = valideDates(date1, date2);

    output2.innerHTML = '';
    wrongDate.innerHTML = '';

    if(response !== true) {
        output2.innerHTML = '';
        wrongDate.innerHTML = response;
    } else {
        output2.innerHTML = date1.toLocaleDateString("ru") + ' ' + '+' + ' ' + date2.toLocaleDateString("ru");
    }
});

function valideDates(date1, date2) {
    let errorMessage = '';

    if(date1 > today || date2 > today) {
        errorMessage += `<p>Dates can't be in the future.</p>`;
    }

    if(today.getFullYear() - date1.getFullYear() > 120 || today.getFullYear() - date2.getFullYear() > 120) {
        errorMessage += `<p>Dates can't be so far in the past.</p>`;
    }

    //ограничение на разницу в возрасте не больше 70 лет
    const ageDifference = Math.abs(date1.getFullYear() - date2.getFullYear());

    if(ageDifference >= 71) {
        errorMessage = `<p>The age difference is too big.</p>`;
    }

    if(errorMessage !== '') return errorMessage;

    return true;
}