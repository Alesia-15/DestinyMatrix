function Points(person) {
  document.querySelector('#apoint').textContent = person.points.apoint;
  document.querySelector('#bpoint').textContent = person.points.bpoint;
  document.querySelector('#cpoint').textContent = person.points.cpoint;
  document.querySelector('#dpoint').textContent = person.points.dpoint;
  document.querySelector('#epoint').textContent = person.points.epoint;
  document.querySelector('#fpoint').textContent = person.points.fpoint;
  document.querySelector('#gpoint').textContent = person.points.gpoint;
  document.querySelector('#hpoint').textContent = person.points.hpoint;
  document.querySelector('#ipoint').textContent = person.points.ipoint;
  document.querySelector('#jpoint').textContent = person.points.jpoint;
  document.querySelector('#kpoint').textContent = person.points.kpoint;
  document.querySelector('#lpoint').textContent = person.points.lpoint;
  document.querySelector('#mpoint').textContent = person.points.mpoint;
  document.querySelector('#npoint').textContent = person.points.npoint;
  document.querySelector('#opoint').textContent = person.points.opoint;
  document.querySelector('#ppoint').textContent = person.points.ppoint;
  document.querySelector('#qpoint').textContent = person.points.qpoint;
  document.querySelector('#rpoint').textContent = person.points.rpoint;
  document.querySelector('#spoint').textContent = person.points.spoint;
  document.querySelector('#tpoint').textContent = person.points.tpoint;
  document.querySelector('#upoint').textContent = person.points.upoint;
  document.querySelector('#vpoint').textContent = person.points.vpoint;
  document.querySelector('#wpoint').textContent = person.points.wpoint;
  document.querySelector('#xpoint').textContent = person.points.xpoint;
  document.querySelector('#f2point').textContent = person.points.f2point;
  document.querySelector('#f1point').textContent = person.points.f1point;
  document.querySelector('#g1point').textContent = person.points.g1point;
  document.querySelector('#g2point').textContent = person.points.g2point;
  document.querySelector('#i1point').textContent = person.points.i1point;
  document.querySelector('#i2point').textContent = person.points.i2point;
  document.querySelector('#h1point').textContent = person.points.h1point;
  document.querySelector('#h2point').textContent = person.points.h2point;
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

const reduceNumber = (number) => {
  let num = number;
  if (number > 22) {
    num = (number % 10) + Math.floor(number / 10);
  }
  return num;
};

const calculateYear = (year) => {
  let y = 0;
  while (year > 0) {
    y += year % 10;
    year = Math.floor(year / 10);
  }
  y = reduceNumber(y);
  return y;
};

const calculatePoints = (aPoint, bPoint, cPoint) => {

  dpoint = reduceNumber(aPoint + bPoint + cPoint);
  epoint = reduceNumber(aPoint + bPoint + cPoint + dpoint);
  fpoint = reduceNumber(aPoint + bPoint);
  gpoint = reduceNumber(bPoint + cPoint);
  hpoint = reduceNumber(dpoint + aPoint);
  ipoint = reduceNumber(cPoint + dpoint);
  jpoint = reduceNumber(dpoint + epoint);

  npoint = reduceNumber(cPoint + epoint);
  lpoint = reduceNumber(jpoint + npoint);
  mpoint = reduceNumber(lpoint + npoint);
  kpoint = reduceNumber(jpoint + lpoint);

  qpoint = reduceNumber(npoint + cPoint);
  rpoint = reduceNumber(jpoint + dpoint);
  spoint = reduceNumber(aPoint + epoint);
  tpoint = reduceNumber(bPoint + epoint);

  opoint = reduceNumber(aPoint + spoint);
  ppoint = reduceNumber(bPoint + tpoint);

  upoint = reduceNumber(fpoint + gpoint + hpoint + ipoint);
  vpoint = reduceNumber(epoint + upoint);
  wpoint = reduceNumber(spoint + epoint);
  xpoint = reduceNumber(tpoint + epoint);

  f2point = reduceNumber(fpoint + upoint);
  f1point = reduceNumber(fpoint + f2point);
  g2point = reduceNumber(gpoint + upoint);
  g1point = reduceNumber(gpoint + g2point);
  i2point = reduceNumber(ipoint + upoint);
  i1point = reduceNumber(ipoint + i2point);
  h2point = reduceNumber(hpoint + upoint);
  h1point = reduceNumber(hpoint + h2point);

  // года

  afpoint = reduceNumber(aPoint + fpoint);
  af1point = reduceNumber(aPoint + afpoint);
  af2point = reduceNumber(aPoint + af1point);
  af3point = reduceNumber(afpoint + af1point);
  af4point = reduceNumber(afpoint + fpoint);
  af5point = reduceNumber(afpoint + af4point);
  af6point = reduceNumber(af4point + fpoint);
  fbpoint = reduceNumber(fpoint + bPoint);
  fb1point = reduceNumber(fpoint + fbpoint);
  fb2point = reduceNumber(fpoint + fb1point);
  fb3point = reduceNumber(fbpoint + fb1point);
  fb4point = reduceNumber(fbpoint + bPoint);
  fb5point = reduceNumber(fbpoint + fb4point);
  fb6point = reduceNumber(fb4point + bPoint);
  bgpoint = reduceNumber(bPoint + gpoint);
  bg1point = reduceNumber(bPoint + bgpoint);
  bg2point = reduceNumber(bPoint + bg1point);
  bg3point = reduceNumber(bgpoint + bg1point);
  bg4point = reduceNumber(bgpoint + gpoint);
  bg5point = reduceNumber(bgpoint + bg4point);
  bg6point = reduceNumber(bg4point + gpoint);
  gcpoint = reduceNumber(gpoint + cPoint);
  gc1point = reduceNumber(gpoint + gcpoint);
  gc2point = reduceNumber(gpoint + gc1point);
  gc3point = reduceNumber(gcpoint + gc1point);
  gc4point = reduceNumber(gcpoint + cPoint);
  gc5point = reduceNumber(gcpoint + gc4point);
  gc6point = reduceNumber(gc4point + cPoint);
  cipoint = reduceNumber(cPoint + ipoint);
  ci1point = reduceNumber(cPoint + cipoint);
  ci2point = reduceNumber(cPoint + ci1point);
  ci3point = reduceNumber(cipoint + ci1point);
  ci4point = reduceNumber(cipoint + ipoint);
  ci5point = reduceNumber(cipoint + ci4point);
  ci6point = reduceNumber(ci4point + ipoint);
  idpoint = reduceNumber(ipoint + dpoint);
  id1point = reduceNumber(ipoint + idpoint);
  id2point = reduceNumber(ipoint + id1point);
  id3point = reduceNumber(idpoint + id1point);
  id4point = reduceNumber(idpoint + dpoint);
  id5point = reduceNumber(idpoint + id4point);
  id6point = reduceNumber(id4point + dpoint);
  dhpoint = reduceNumber(dpoint + hpoint);
  dh1point = reduceNumber(dpoint + dhpoint);
  dh2point = reduceNumber(dpoint + dh1point);
  dh3point = reduceNumber(dhpoint + dh1point);
  dh4point = reduceNumber(dhpoint + hpoint);
  dh5point = reduceNumber(dhpoint + dh4point);
  dh6point = reduceNumber(dh4point + hpoint);
  hapoint = reduceNumber(hpoint + aPoint);
  ha1point = reduceNumber(hpoint + hapoint);
  ha2point = reduceNumber(hpoint + ha1point);
  ha3point = reduceNumber(hapoint + ha1point);
  ha4point = reduceNumber(hapoint + aPoint);
  ha5point = reduceNumber(hapoint + ha4point);
  ha6point = reduceNumber(ha4point + aPoint);
  skypoint = reduceNumber(bPoint + dpoint);
  earthpoint = reduceNumber(aPoint + cPoint);
  perspurpose = reduceNumber(skypoint + earthpoint);
  femalepoint = reduceNumber(gpoint + hpoint);
  malepoint = reduceNumber(fpoint + ipoint);
  socialpurpose = reduceNumber(femalepoint + malepoint);
  generalpurpose = reduceNumber(perspurpose + socialpurpose);
  planetarypurpose = reduceNumber(socialpurpose + generalpurpose);

  years = {
    afpoint: afpoint,
    af1point: af1point,
    af2point: af2point,
    af3point: af3point,
    af4point: af4point,
    af5point: af5point,
    af6point: af6point,
    fbpoint: fbpoint,
    fb1point: fb1point,
    fb2point: fb2point,
    fb3point: fb3point,
    fb4point: fb4point,
    fb5point: fb5point,
    fb6point: fb6point,
    bgpoint: bgpoint,
    bg1point: bg1point,
    bg2point: bg2point,
    bg3point: bg3point,
    bg4point: bg4point,
    bg5point: bg5point,
    bg6point: bg6point,
    gcpoint: gcpoint,
    gc1point: gc1point,
    gc2point: gc2point,
    gc3point: gc3point,
    gc4point: gc4point,
    gc5point: gc5point,
    gc6point: gc6point,
    cipoint: cipoint,
    ci1point: ci1point,
    ci2point: ci2point,
    ci3point: ci3point,
    ci4point: ci4point,
    ci5point: ci5point,
    ci6point: ci6point,
    idpoint: idpoint,
    id1point: id1point,
    id2point: id2point,
    id3point: id3point,
    id4point: id4point,
    id5point: id5point,
    id6point: id6point,
    dhpoint: dhpoint,
    dh1point: dh1point,
    dh2point: dh2point,
    dh3point: dh3point,
    dh4point: dh4point,
    dh5point: dh5point,
    dh6point: dh6point,
    hapoint: hapoint,
    ha1point: ha1point,
    ha2point: ha2point,
    ha3point: ha3point,
    ha4point: ha4point,
    ha5point: ha5point,
    ha6point: ha6point
  }

  points = {
    apoint: aPoint,
    bpoint: bPoint,
    cpoint: cPoint,
    dpoint: dpoint,
    epoint: epoint,
    fpoint: fpoint,
    gpoint: gpoint,
    hpoint: hpoint,
    ipoint: ipoint,
    jpoint: jpoint,
    kpoint: kpoint,
    lpoint: lpoint,
    mpoint: mpoint,
    npoint: npoint,
    opoint: opoint,
    ppoint: ppoint,
    qpoint: qpoint,
    rpoint: rpoint,
    spoint: spoint,
    tpoint: tpoint,
    upoint: upoint,
    vpoint: vpoint,
    wpoint: wpoint,
    xpoint: xpoint,
    f2point: f2point,
    f1point: f1point,
    g2point: g2point,
    g1point: g1point,
    i2point: i2point,
    i1point: i1point,
    h2point: h2point,
    h1point: h1point,
  };

  purposes = {
    skypoint: skypoint,
    earthpoint: earthpoint,
    perspurpose: perspurpose,

    femalepoint: femalepoint,
    malepoint: malepoint,
    socialpurpose: socialpurpose,

    generalpurpose: generalpurpose,
    planetarypurpose: planetarypurpose
  };

  chartHeart = {
    sahphysics: aPoint,
    ajphysics: opoint,
    vishphysics: spoint,
    anahphysics: wpoint,
    manphysics: epoint,
    svadphysics: jpoint,
    mulphysics: cPoint,

    sahenergy: bPoint,
    ajenergy: ppoint,
    vishenergy: tpoint,
    anahenergy: xpoint,
    manenergy: epoint,
    svadenergy: npoint,
    mulenergy: dpoint,

    sahemotions: reduceNumber(aPoint + bPoint),
    ajemotions: reduceNumber(opoint + ppoint),
    vishemotions: reduceNumber(spoint + tpoint),
    anahemotions: reduceNumber(wpoint + xpoint),
    manemotions: reduceNumber(epoint + epoint),
    svademotions: reduceNumber(jpoint + npoint),
    mulemotions: reduceNumber(cPoint + dpoint),
  };
};

// очищает инпуты
function clearInputs(firtsInput, secondInput) {
  firtsInput.value = "";
  secondInput.value = "";
}

function outputYears(obj){
  for (let key in obj){
    document.getElementById(`${key}`).innerHTML = obj[key];
  }
}

// Кнопка GET YOUR FULL DESTINY MATRIX READING
const decodematrixbtn = document.querySelector("#decode-matrix-btn");
decodematrixbtn.addEventListener("click", function () {
  window.location.href = "http://krisuniverse.com/rates";
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header-right');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.header__link').forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))
