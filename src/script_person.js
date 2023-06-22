const button = document.querySelector("#get_the_answer");

button.addEventListener("click", () => {
  // let apoint = 11; // day of birth
  // let bpoint = 11; // month of birth
  // let year = 1999; //year of birth
  // let cpoint = calculateYear(year); // c - year of birth
  // calculatePoints();
  // Points();
  ChartHeart();
  Purposes();
});

function Points() {
  document.querySelector('#apoint').textContent = points.apoint;
  document.querySelector('#bpoint').textContent = points.bpoint;
  document.querySelector('#cpoint').textContent = points.cpoint;
  document.querySelector('#dpoint').textContent = points.dpoint;
  document.querySelector('#epoint').textContent = points.epoint;
  console.log('sss')
}

function ChartHeart() {
  // Physics
  const sahphysics = document.querySelector("#sahphysics");
  sahphysics.textContent = chartHeart.sahphysics;
  const ajphysics = document.querySelector("#ajphysics");
  ajphysics.textContent = chartHeart.ajphysics;
  const vishphysics = document.querySelector("#vishphysics");
  vishphysics.textContent = chartHeart.vishphysics;
  const anahphysics = document.querySelector("#anahphysics");
  anahphysics.textContent = chartHeart.anahphysics;
  const manphysics = document.querySelector("#manphysics");
  manphysics.textContent = chartHeart.manphysics;
  const svadphysics = document.querySelector("#svadphysics");
  svadphysics.textContent = chartHeart.svadphysics;
  const mulphysics = document.querySelector("#mulphysics");
  mulphysics.textContent = chartHeart.mulphysics;
  const resultphysics = document.querySelector("#resultphysics");
  resultphysics.textContent = reduceNumber(
    chartHeart.sahphysics +
    chartHeart.ajphysics +
    chartHeart.vishphysics +
    chartHeart.anahphysics +
    chartHeart.manphysics +
    chartHeart.svadphysics +
    chartHeart.mulphysics
  );

  // Energy
  const sahenergy = document.querySelector("#sahenergy");
  sahenergy.textContent = chartHeart.sahenergy;
  const ajenergy = document.querySelector("#ajenergy");
  ajenergy.textContent = chartHeart.ajenergy;
  const vishenergy = document.querySelector("#vishenergy");
  vishenergy.textContent = chartHeart.vishenergy;
  const anahenergy = document.querySelector("#anahenergy");
  anahenergy.textContent = chartHeart.anahenergy;
  const manenergy = document.querySelector("#manenergy");
  manenergy.textContent = chartHeart.manenergy;
  const svadenergy = document.querySelector("#svadenergy");
  svadenergy.textContent = chartHeart.svadenergy;
  const mulenergy = document.querySelector("#mulenergy");
  mulenergy.textContent = chartHeart.mulenergy;
  const resultenergy = document.querySelector("#resultenergy");
  resultenergy.textContent = reduceNumber(
    chartHeart.sahenergy +
    chartHeart.ajenergy +
    chartHeart.vishenergy +
    chartHeart.anahenergy +
    chartHeart.manenergy +
    chartHeart.svadenergy +
    chartHeart.mulenergy
  );

  // Emotions
  const sahemotions = document.querySelector("#sahemotions");
  sahemotions.textContent = chartHeart.sahemotions;
  const ajemotions = document.querySelector("#ajemotions");
  ajemotions.textContent = chartHeart.ajemotions;
  const vishemotions = document.querySelector("#vishemotions");
  vishemotions.textContent = chartHeart.vishemotions;
  const anahemotions = document.querySelector("#anahemotions");
  anahemotions.textContent = chartHeart.anahemotions;
  const manemotions = document.querySelector("#manemotions");
  manemotions.textContent = chartHeart.manemotions;
  const svademotions = document.querySelector("#svademotions");
  svademotions.textContent = chartHeart.svademotions;
  const mulemotions = document.querySelector("#mulemotions");
  mulemotions.textContent = chartHeart.mulemotions;
  const resultemotions = document.querySelector("#resultemotions");
  resultemotions.textContent = reduceNumber(
    chartHeart.sahemotions +
    chartHeart.ajemotions +
    chartHeart.vishemotions +
    chartHeart.anahemotions +
    chartHeart.manemotions +
    chartHeart.svademotions +
    chartHeart.mulemotions
  );
}

function Purposes() {
  // Personal purpose
  const sky = document.querySelector("#skypoint");
  sky.textContent = purposes.skypoint;
  const earth = document.querySelector("#earthpoint");
  earth.textContent = purposes.earthpoint;
  const perspurpose = document.querySelector("#perspurpose");
  perspurpose.textContent = purposes.perspurpose;
  // Purpose for society and genus
  const male = document.querySelector("#malepoint");
  male.textContent = purposes.malepoint;
  const female = document.querySelector("#femalepoint");
  female.textContent = purposes.femalepoint;
  const socialpurpose = document.querySelector("#socialpurpose");
  socialpurpose.textContent = purposes.socialpurpose;
  // General purpose for this lifetime
  const generalpurpose = document.querySelector("#generalpurpose");
  generalpurpose.textContent = purposes.generalpurpose;
  // Planetary purpose
  const planetarypurpose = document.querySelector("#planetarypurpose");
  planetarypurpose.textContent = purposes.planetarypurpose;
}
