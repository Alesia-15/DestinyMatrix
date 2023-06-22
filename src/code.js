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

let person = {};
let secondPerson = {};
let points = {};
let purposes = {};
let chartHeart = {};
// ========== эти данные будем брать из текстового поля формы
let apoint = 11; // day of birth
let bpoint = 11; // month of birth
let year = 1999; //year of birth
let cpoint = calculateYear(year); // c - year of birth

// значения для второго человека
let secondApoint = 6;
let secondBpoint = 7;
let secondYear = 1998;
let secondCpoint = calculateYear(secondYear);
// ==========================

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

//одна универсальная функция для каждой персоны
function createPerson(per, apoint, bpoint, cpoint) {
  calculatePoints(apoint, bpoint, cpoint);
  per.points = points;
  per.purposes = purposes;
  per.chartHeart = chartHeart;
  // console.log(per.points);
}

// createFirstPerson();
// createSecondPerson();

// общие значения матрицы
const compatibilityMatrix = [
  {
    id: 'compatibilityApoint',
    value: reduceNumber(person.points.apoint + secondPerson.points.apoint)
  },
  {
    id: 'compatibilityBpoint',
    value: reduceNumber(person.points.bpoint + secondPerson.points.bpoint)
  },
  {
    id: 'compatibilityCpoint',
    value: reduceNumber(person.points.cpoint + secondPerson.points.cpoint)
  },
  {
    id: 'compatibilityDpoint',
    value: reduceNumber(person.points.dpoint + secondPerson.points.dpoint)
  },
  {
    id: 'compatibilityEpoint',
    value: reduceNumber(person.points.epoint + secondPerson.points.epoint)
  },
  {
    id: 'compatibilityFpoint',
    value: reduceNumber(person.points.fpoint + secondPerson.points.fpoint)
  },
  {
    id: 'compatibilityGpoint',
    value: reduceNumber(person.points.gpoint + secondPerson.points.gpoint)
  },
  {
    id: 'compatibilityHpoint',
    value: reduceNumber(person.points.hpoint + secondPerson.points.hpoint)
  },
  {
    id: 'compatibilityIpoint',
    value: reduceNumber(person.points.ipoint + secondPerson.points.ipoint)
  },
  {
    id: 'compatibilityJpoint',
    value: reduceNumber(person.points.jpoint + secondPerson.points.jpoint)
  },
  {
    id: 'compatibilityNpoint',
    value: reduceNumber(person.points.npoint + secondPerson.points.npoint)
  },
  {
    id: 'compatibilityLpoint',
    value: reduceNumber(person.points.lpoint + secondPerson.points.lpoint)
  },
  {
    id: 'compatibilityKpoint',
    value: reduceNumber(person.points.kpoint + secondPerson.points.kpoint)
  },
  {
    id: 'compatibilityMpoint',
    value: reduceNumber(person.points.mpoint + secondPerson.points.mpoint)
  },
  {
    id: 'compatibilitySpoint',
    value: reduceNumber(person.points.spoint + secondPerson.points.spoint)
  },
  {
    id: 'compatibilityOpoint',
    value: reduceNumber(person.points.opoint + secondPerson.points.opoint)
  },
  {
    id: 'compatibilityTpoint',
    value: reduceNumber(person.points.tpoint + secondPerson.points.tpoint)
  },
  {
    id: 'compatibilityPpoint',
    value: reduceNumber(person.points.ppoint + secondPerson.points.ppoint)
  },
  {
    id: 'compatibilityQpoint',
    value: reduceNumber(person.points.qpoint + secondPerson.points.qpoint)
  },
  {
    id: 'compatibilityRpoint',
    value: reduceNumber(person.points.rpoint + secondPerson.points.rpoint)
  },
  {
    id: 'compatibilityVpoint',
    value: reduceNumber(person.points.vpoint + secondPerson.points.vpoint)
  },
  {
    id: 'compatibilityUpoint',
    value: reduceNumber(person.points.upoint + secondPerson.points.upoint)
  },
  {
    id: 'compatibilityWpoint',
    value: reduceNumber(person.points.wpoint + secondPerson.points.wpoint)
  },
  {
    id: 'compatibilityXpoint',
    value: reduceNumber(person.points.xpoint + secondPerson.points.xpoint)
  },
  {
    id: 'compatibilityF2point',
    value: reduceNumber(person.points.f2point + secondPerson.points.f2point)
  },
  {
    id: 'compatibilityF1point',
    value: reduceNumber(person.points.f1point + secondPerson.points.f1point)
  },
  {
    id: 'compatibilityG2point',
    value: reduceNumber(person.points.g2point + secondPerson.points.g2point)
  },
  {
    id: 'compatibilityG1point',
    value: reduceNumber(person.points.g1point + secondPerson.points.g1point)
  },
  {
    id: 'compatibilityI2point',
    value: reduceNumber(person.points.i2point + secondPerson.points.i2point)
  },
  {
    id: 'compatibilityI1point',
    value: reduceNumber(person.points.i1point + secondPerson.points.i1point)
  },
  {
    id: 'compatibilityH2point',
    value: reduceNumber(person.points.h2point + secondPerson.points.h2point)
  },
  {
    id: 'compatibilityH1point',
    value: reduceNumber(person.points.h1point + secondPerson.points.h1point)
  }
]

// функция, которая ищет одинаковые айдишники в матрице и массиве, и выводит значения
function outputCompatibilityMatrixValues() {
  const elements = document.querySelectorAll('[id^="compatibility"]');
  compatibilityMatrix.forEach(matrixItem => {
    elements.forEach(el => {
      if (el.id === matrixItem.id) {
        el.innerHTML = matrixItem.value;
      }
    });
  });
}

// кнопка матрицы совместимости
const buttonCreateChart = document.querySelector('#createChart');
console.log(buttonCreateChart);
buttonCreateChart.addEventListener('click', outputCompatibilityMatrixValues);
