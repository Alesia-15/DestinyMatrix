// 'use strict';

const btnAnswer = document.getElementById('get_the_answer');


// ставит ограничитель в календаре на даты, которые не наступили
let today = new Date();
document.getElementById('date').setAttribute("max", today.toLocaleDateString("en-CA"));

// ставит ограничитель в календаре на даты, которые были раньше 120 лет назад
let ancientDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDay());
document.getElementById('date').setAttribute("min", ancientDate.toLocaleDateString("en-CA"));

/* делает первую букву в имени заглавной, работает также для двойных имен, пишущихся через дефис или пробел */

function titleCase(str) {
    return str.replace(/^[a-z]|[\- ][a-z]/g, function (a) { return a.toUpperCase(); })
}

// кнопка для рассчёта персональной матрицы
btnAnswer.addEventListener('click', (evt) => {
    evt.preventDefault();
    const date = new Date(document.getElementById('date').value);
    const name = document.getElementById('name').value;
    const output = document.querySelector('.output');
    const gray = document.querySelector('.gray');
    const nameOutput = document.getElementById('nameOutput');
    const dateOutput = document.getElementById('dateOutput');
    const response = valide(date, name);

    if (response !== true) {
        nameOutput.innerHTML = '';
        dateOutput.innerHTML = '';
        gray.innerHTML = '';
        output.innerHTML = response;
    } else {
        nameOutput.innerHTML = titleCase(name);
        dateOutput.innerHTML = date.toLocaleDateString("ru");
    }
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
});

function valide(date, name) {
    /* проверка имени. Имя может содержать только буквы, тире или писаться через пробел (если несколько имён) */
    let errorMessage = '';
    const nameValide = new RegExp("^[a-zA-Z\- ]*$");

    if (name === '' || isNaN(date.getFullYear()) === true) {
        errorMessage += `<p>Date and name must be filled in.</p>`;
    }

    let today = new Date();
    if (date > today) {
        errorMessage += `<p>Date can't be in the future.</p>`;
    }

    if (today.getFullYear() - date.getFullYear() > 120) {
        errorMessage += `<p>Date can't be so far in the past.</p>`;
    }

    // ставит ограничитель в календаре на даты, которые были раньше 120 лет назад
    let ancientDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDay());
    document.getElementById('date').setAttribute("min", ancientDate.toLocaleDateString("en-CA"));

    console.log('ici:' + date);

    if (!nameValide.test(name)) {
        errorMessage += `<p>Name format is incorrect: allowed characters are letters, dash and space. Example: Anna, Anna-Maria, Anna Maria.</p>`;
    }
    if (errorMessage !== '') return errorMessage;

    return true;
}

