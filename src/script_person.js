const dateInput = document.getElementById("date");
const nameInput = document.getElementById("name");

const container = document.querySelector('.matrix-container');
container.classList.add('display-none');

const btnAnswer = document.getElementById('get_the_answer');

// ставит ограничитель в календаре на даты, которые не наступили
let today = new Date();
document.getElementById('date').setAttribute("max", today.toLocaleDateString("en-CA"));
// ставит ограничитель в календаре на даты, которые были раньше 120 лет назад
let ancientDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDay());
document.getElementById('date').setAttribute("min", ancientDate.toLocaleDateString("en-CA"));

// значение инпутов по умолчанию для перезагрузки страницы, пока выдает ошибку
dateInput.value = '';
nameInput.value = '';

let person = {};
let points = {};
let purposes = {};
let chartHeart = {};
let years = {};

//одна универсальная функция для каждой персоны
function createPerson(per, apoint, bpoint, cpoint) {
  calculatePoints(apoint, bpoint, cpoint);
  per.points = points;
  per.purposes = purposes;
  per.chartHeart = chartHeart;
  per.years = years;
}

function titleCase(str) {
  return str.replace(/^[a-zа-яё]|[\- ][a-zа-яё]/g, function (a) { return a.toUpperCase(); })
}

btnAnswer.addEventListener('click', (evt) => {
  evt.preventDefault();

  const date = new Date(document.getElementById('date').value);
  const calculationDate = document.getElementById('date').value;
  const name = document.getElementById('name').value;
  const errorOutput = document.querySelector('.errorOutput');
  const output = document.querySelector('.output-personal-date');
  const response = valide(date, name);

  output.innerHTML = '';
  errorOutput.innerHTML = '';

  const splitDate = calculationDate.split('-');
  const fullDate = `${splitDate[2]}.${splitDate[1]}.${splitDate[0]}`

  if (response !== true) {
    output.innerHTML = '';
    errorOutput.innerHTML = response;
    container.classList.add('display-none');
  } else {
    output.innerHTML = titleCase(name) + ' ' + '<span class="gray">Date of Birth:</span>' + ' ' + fullDate;

    container.classList.remove('display-none');
    container.scrollIntoView({behavior: "smooth"});
    let apoint = reduceNumber(+splitDate[2]); // day of birth
    let bpoint = +splitDate[1]; // month of birth
    let year = +splitDate[0]; //year of birth
    let cpoint = calculateYear(year); // c - year of birth

    createPerson(person, apoint, bpoint, cpoint);
    Points(person);
    ChartHeart();
    Purposes();
    outputYears(person.years);
    clearInputs(dateInput, nameInput);
  }
});

function valide(date, name) {
  /* проверка имени. Имя может содержать только буквы, тире или писаться через пробел (если несколько имён) */
  let errorMessage = '';
  const nameValide = new RegExp("^[а-яё\\- ]*[a-z\\- ]*$", "i");

  if(date === 'Invalid Date'){
    console.log('la date est invalide');
  }

  if (name === '' || isNaN(date.getFullYear()) === true) {
    errorMessage += `<p>Date is not valid or one of the fields is empty.</p>`;
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

  if (!nameValide.test(name)) {
    errorMessage += `<p>Name format is incorrect: allowed characters are letters, dash and space. Example: Anna, Anna-Maria, Anna Maria.</p>`;
  }
  if (errorMessage !== '') return errorMessage;

  return true;
}
