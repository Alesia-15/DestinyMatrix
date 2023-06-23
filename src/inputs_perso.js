'use strict';

const btnAnswer = document.getElementById('get_the_answer');

// ставит ограничитель в календаре на даты, которые не наступили
let today = new Date();
document.getElementById('date').setAttribute("max", today.toLocaleDateString("en-CA"));

// ставит ограничитель в календаре на даты, которые были раньше 120 лет назад
let ancientDate = new Date (today.getFullYear() - 120, today.getMonth(), today.getDay());
document.getElementById('date').setAttribute("min", ancientDate.toLocaleDateString("en-CA"));

/* делает первую букву в имени заглавной, работает также для двойных имен, пишущихся через дефис */

function titleCase(str) {
    return str.replace(/^[a-z]|[\- ][a-z]/g,function(a){return a.toUpperCase();})
}

// кнопка для рассчёта персональной матрицы
btnAnswer.addEventListener('click', (evt) => {
    evt.preventDefault();
    const date = new Date(document.getElementById('date').value);
    const name = document.getElementById('name').value;
    const output = document.querySelector('.output');
    const response = valide(date, name);
    if(response !== true) {
        output.innerHTML = response;
    } else {
        output.innerHTML = titleCase(name) + ' ' + 'Date of birth :' + ' ' + date.toLocaleDateString("ru");
    }
    
    document.forms.form.reset();
});

function valide(date, name) {
    /* проверка имени. Имя может содержать только буквы, тире или писаться через пробел (если несколько имён) */
    let errorMessage = '';
    const nameValide = new RegExp("^[a-zA-Z\- ]*$");

    if(name === '' || isNaN(date.getFullYear()) === true) {
        errorMessage += 'Date and name must be filled in.';
    }
    if(! nameValide.test(name)) {
        console.log("LE NOM Est INCORRECT");
        errorMessage += 'Name format is incorrect: allowed characters are letters, dash and space. Example: Anna, Anna-Maria, Anna Maria.';
    }
    if(errorMessage !== '') return errorMessage;

    return true;
}

