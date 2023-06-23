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
  // console.log(person.points)
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
  epoint = reduceNumber(dpoint + dpoint);
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
  i1point = reduceNumber((ipoint = i2point));
  h2point = reduceNumber(hpoint + upoint);
  h1point = reduceNumber(hpoint + h2point);
  // points.push(apoint, bpoint, cpoint, dpoint, epoint, fpoint, gpoint, hpoint, ipoint, jpoint, kpoint, lpoint, mpoint, npoint, opoint, ppoint,
  // qpoint, rpoint, spoint, tpoint, upoint, vpoint, wpoint, xpoint, f2point, f1point, g2point, g1point, i2point, i1point, h2point, h1point);
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

  skypoint = reduceNumber(bPoint + dpoint);
  earthpoint = reduceNumber(aPoint + cPoint);
  purposes = {
    skypoint: reduceNumber(bPoint + dpoint),
    earthpoint: reduceNumber(aPoint + cPoint),
    perspurpose: reduceNumber(skypoint + earthpoint),
    // 'perspurpose': reduceNumber(apoint + bpoint + cpoint + dpoint),

    femalepoint: reduceNumber(gpoint + hpoint),
    malepoint: reduceNumber(fpoint + ipoint),
    socialpurpose: reduceNumber(gpoint + hpoint + fpoint + ipoint),

    generalpurpose: reduceNumber(
      aPoint + bPoint + cPoint + dpoint + gpoint + hpoint + fpoint + ipoint
    ),
    planetarypurpose: reduceNumber(
      aPoint +
      bPoint +
      cPoint +
      dpoint +
      gpoint +
      hpoint +
      fpoint +
      ipoint +
      gpoint +
      hpoint +
      fpoint +
      ipoint
    ),
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


