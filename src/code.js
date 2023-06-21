const reduceNumber = (number) => {
    let num = number;
    if (number > 22) {
        num = number % 10 + Math.floor(number / 10);
    }
    return num;
}

const calculateYear = (year) => {
    let y = 0;
    while (year > 0) {
        y += year % 10;
        year = Math.floor(year / 10);
    }
    y = reduceNumber(y);
    return y;
}
// let points = [];
let person = {};
let secondPerson = {};
let points = {};
let purposes = {};
let chartHeart = {};
// ========== эти данные будем брать из текстового поля формы
let apoint = 11; // day of birth
let bpoint = 11; // month of birth
let year = 1999;  //year of birth 
let cpoint = calculateYear(year); // c - year of birth

// значения для второго человека
let a = 6;
let b = 7;
let y = 1998;
let c = calculateYear(y);
// ==========================

const calculatePoints = (aPoint, bPoint, cPoint) => {

    dpoint = reduceNumber(aPoint + bPoint + cPoint)
    epoint = reduceNumber(dpoint + dpoint)
    fpoint = reduceNumber(aPoint + bPoint)
    gpoint = reduceNumber(bPoint + cPoint)
    hpoint = reduceNumber(dpoint + aPoint)
    ipoint = reduceNumber(cPoint + dpoint)
    jpoint = reduceNumber(dpoint + epoint)

    npoint = reduceNumber(cPoint + epoint)
    lpoint = reduceNumber(jpoint + npoint)
    mpoint = reduceNumber(lpoint + npoint)
    kpoint = reduceNumber(jpoint + lpoint)

    qpoint = reduceNumber(npoint + cPoint)
    rpoint = reduceNumber(jpoint + dpoint)
    spoint = reduceNumber(aPoint + epoint)
    tpoint = reduceNumber(bPoint + epoint)

    opoint = reduceNumber(aPoint + spoint)
    ppoint = reduceNumber(bPoint + tpoint)

    upoint = reduceNumber(fpoint + gpoint + hpoint + ipoint)
    vpoint = reduceNumber(epoint + upoint)
    wpoint = reduceNumber(spoint + epoint)
    xpoint = reduceNumber(tpoint + epoint)

    f2point = reduceNumber(fpoint + upoint)
    f1point = reduceNumber(fpoint + f2point)
    g2point = reduceNumber(gpoint + upoint)
    g1point = reduceNumber(gpoint + g2point)
    i2point = reduceNumber(ipoint + upoint)
    i1point = reduceNumber(ipoint = i2point)
    h2point = reduceNumber(hpoint + upoint)
    h1point = reduceNumber(hpoint + h2point)
    // points.push(apoint, bpoint, cpoint, dpoint, epoint, fpoint, gpoint, hpoint, ipoint, jpoint, kpoint, lpoint, mpoint, npoint, opoint, ppoint,
    // qpoint, rpoint, spoint, tpoint, upoint, vpoint, wpoint, xpoint, f2point, f1point, g2point, g1point, i2point, i1point, h2point, h1point);
    points = {
        'apoint': aPoint, 'bpoint': bPoint, 'cpoint': cPoint, 'dpoint': dpoint, 'epoint': epoint, 'fpoint': fpoint, 'gpoint': gpoint,
        'hpoint': hpoint, 'ipoint': ipoint, 'jpoint': jpoint, 'kpoint': kpoint, 'lpoint': lpoint, 'mpoint': mpoint, 'npoint': npoint,
        'opoint': opoint, 'ppoint': ppoint, 'qpoint': qpoint, 'rpoint': rpoint, 'spoint': spoint, 'tpoint': tpoint, 'upoint': upoint, 'vpoint': vpoint,
        'wpoint': wpoint, 'xpoint': xpoint,
        'f2point': f2point, 'f1point': f1point,
        'g2point': g2point, 'g1point': g1point,
        'i2point': i2point, 'i1point': i1point, 'h2point': h2point, 'h1point': h1point
    };

    skypoint = reduceNumber(bPoint + dpoint)
    earthpoint = reduceNumber(aPoint + cPoint)
    purposes = {
        'skypoint': reduceNumber(bPoint + dpoint),
        'earthpoint': reduceNumber(aPoint + cPoint),
        'perspurpose': reduceNumber(skypoint + earthpoint),
        // 'perspurpose': reduceNumber(apoint + bpoint + cpoint + dpoint),

        'femalepoint': reduceNumber(gpoint + hpoint),
        'malepoint': reduceNumber(fpoint + ipoint),
        'socialpurpose': reduceNumber(gpoint + hpoint + fpoint + ipoint),

        'generalpurpose': reduceNumber(aPoint + bPoint + cPoint + dpoint + gpoint + hpoint + fpoint + ipoint),
        'planetarypurpose': reduceNumber(aPoint + bPoint + cPoint + dpoint + gpoint + hpoint + fpoint + ipoint + gpoint + hpoint + fpoint + ipoint),
    }

    chartHeart = {
        'sahphysics': aPoint,
        'ajphysics': opoint,
        'vishphysics': spoint,
        'anahphysics': wpoint,
        'manphysics': epoint,
        'svadphysics': jpoint,
        'mulphysics': cPoint,

        'sahenergy': bPoint,
        'ajenergy': ppoint,
        'vishenergy': tpoint,
        'anahenergy': xpoint,
        'manenergy': epoint,
        'svadenergy': npoint,
        'mulenergy': dpoint,

        'sahemotions': reduceNumber(aPoint + bPoint),
        'ajemotions': reduceNumber(opoint + ppoint),
        'vishemotions': reduceNumber(spoint + tpoint),
        'anahemotions': reduceNumber(wpoint + xpoint),
        'manemotions': reduceNumber(epoint + epoint),
        'svademotions': reduceNumber(jpoint + npoint),
        'mulemotions': reduceNumber(cPoint + dpoint)
    }
}

// calculatePoints(apoint, bpoint, cpoint);

// console.log(points)
// console.log(purposes)
// console.log(chartHeart)

// создаем объект первого человека
function createFirstPerson (){
    calculatePoints(apoint, bpoint, cpoint);
    person.points = points;
    person.purposes = purposes;
    person.chartHeart = chartHeart;
}

// создаем объект второго человека
function createSecondPerson (){
    calculatePoints(a, b, c);
    secondPerson.points = points;
    secondPerson.purposes = purposes;
    secondPerson.chartHeart = chartHeart;
}

createFirstPerson();
createSecondPerson();

// общие значения матрицы
    const commonMatrix = {
        'A': reduceNumber(person.points.apoint + secondPerson.points.apoint),
        'B': reduceNumber(person.points.bpoint + secondPerson.points.bpoint),
        'C': reduceNumber(person.points.cpoint + secondPerson.points.cpoint),
        'D': reduceNumber(person.points.dpoint + secondPerson.points.dpoint),
        'E': reduceNumber(person.points.epoint + secondPerson.points.epoint),
        'F': reduceNumber(person.points.fpoint + secondPerson.points.fpoint),
        'G': reduceNumber(person.points.gpoint + secondPerson.points.gpoint),
        'H': reduceNumber(person.points.hpoint + secondPerson.points.hpoint),
        'I': reduceNumber(person.points.ipoint + secondPerson.points.ipoint),
        'J': reduceNumber(person.points.jpoint + secondPerson.points.jpoint),
        'N': reduceNumber(person.points.npoint + secondPerson.points.npoint),
        'L': reduceNumber(person.points.lpoint + secondPerson.points.lpoint),
        'K': reduceNumber(person.points.kpoint + secondPerson.points.kpoint),
        'M': reduceNumber(person.points.mpoint + secondPerson.points.mpoint),
        'S': reduceNumber(person.points.spoint + secondPerson.points.spoint),
        'O': reduceNumber(person.points.opoint + secondPerson.points.opoint),
        'T': reduceNumber(person.points.tpoint + secondPerson.points.tpoint),
        'P': reduceNumber(person.points.ppoint + secondPerson.points.ppoint),
        'Q': reduceNumber(person.points.qpoint + secondPerson.points.qpoint),
        'R': reduceNumber(person.points.rpoint + secondPerson.points.rpoint),
        'V': reduceNumber(person.points.vpoint + secondPerson.points.vpoint),
        'U': reduceNumber(person.points.upoint + secondPerson.points.upoint)
    };
    console.log(commonMatrix);
    console.log(person);
    console.log(secondPerson);