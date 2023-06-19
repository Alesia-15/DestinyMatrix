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
let points = {};
let purposes = {};
let chartHeart = {};
//========== эти данные будем брать из текстового поля формы
let apoint = 11; // day of birth
let bpoint = 11; // month of birth
let year = 1999;  //year of birth 
let cpoint = calculateYear(year); // c - year of birth
//==========================

const calculatePoints = (apoint, bpoint, cpoint) => {
    dpoint = reduceNumber(apoint + bpoint + cpoint)
    epoint = reduceNumber(dpoint + dpoint)
    fpoint = reduceNumber(apoint + bpoint)
    gpoint = reduceNumber(bpoint + cpoint)
    hpoint = reduceNumber(dpoint + apoint)
    ipoint = reduceNumber(cpoint + dpoint)
    jpoint = reduceNumber(dpoint + epoint)

    npoint = reduceNumber(cpoint + epoint)
    lpoint = reduceNumber(jpoint + npoint)
    mpoint = reduceNumber(lpoint + npoint)
    kpoint = reduceNumber(jpoint + lpoint)

    qpoint = reduceNumber(npoint + cpoint)
    rpoint = reduceNumber(jpoint + dpoint)
    spoint = reduceNumber(apoint + epoint)
    tpoint = reduceNumber(bpoint + epoint)

    opoint = reduceNumber(apoint + spoint)
    ppoint = reduceNumber(bpoint + tpoint)

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
        'apoint': apoint, 'bpoint': bpoint, 'cpoint': cpoint, 'dpoint': dpoint, 'epoint': epoint, 'fpoint': fpoint, 'gpoint': gpoint,
        'hpoint': hpoint, 'ipoint': ipoint, 'jpoint': jpoint, 'kpoint': kpoint, 'lpoint': lpoint, 'mpoint': mpoint, 'npoint': npoint,
        'opoint': opoint, 'ppoint': ppoint, 'qpoint': qpoint, 'rpoint': rpoint, 'spoint': spoint, 'tpoint': tpoint, 'upoint': upoint, 'vpoint': vpoint,
        'wpoint': wpoint, 'xpoint': xpoint,
        'f2point': f2point, 'f1point': f1point,
        'g2point': g2point, 'g1point': g1point,
        'i2point': i2point, 'i1point': i1point, 'h2point': h2point, 'h1point': h1point
    };

    skypoint = reduceNumber(bpoint + dpoint)
    earthpoint = reduceNumber(apoint + cpoint)
    purposes = {
        'skypoint': reduceNumber(bpoint + dpoint),
        'earthpoint': reduceNumber(apoint + cpoint),
        'perspurpose': reduceNumber(skypoint + earthpoint),
        // 'perspurpose': reduceNumber(apoint + bpoint + cpoint + dpoint),

        'femalepoint': reduceNumber(gpoint + hpoint),
        'malepoint': reduceNumber(fpoint + ipoint),
        'socialpurpose': reduceNumber(gpoint + hpoint + fpoint + ipoint),

        'generalpurpose': reduceNumber(apoint + bpoint + cpoint + dpoint + gpoint + hpoint + fpoint + ipoint),
        'planetarypurpose': reduceNumber(apoint + bpoint + cpoint + dpoint + gpoint + hpoint + fpoint + ipoint + gpoint + hpoint + fpoint + ipoint),
    }

    chartHeart = {
        'sahphysics': apoint,
        'ajphysics': opoint,
        'vishphysics': spoint,
        'anahphysics': wpoint,
        'manphysics': epoint,
        'svadphysics': jpoint,
        'mulphysics': cpoint,

        'sahenergy': bpoint,
        'ajenergy': ppoint,
        'vishenergy': tpoint,
        'anahenergy': xpoint,
        'manenergy': epoint,
        'svadenergy': npoint,
        'mulenergy': dpoint,

        'sahemotions': reduceNumber(apoint + bpoint),
        'ajemotions': reduceNumber(opoint + ppoint),
        'vishemotions': reduceNumber(spoint + tpoint),
        'anahemotions': reduceNumber(wpoint + xpoint),
        'manemotions': reduceNumber(epoint + epoint),
        'svademotions': reduceNumber(jpoint + npoint),
        'mulemotions': reduceNumber(cpoint + dpoint)
    }
}

calculatePoints(apoint, bpoint, cpoint);

console.log(points)
console.log(purposes)
console.log(chartHeart)

