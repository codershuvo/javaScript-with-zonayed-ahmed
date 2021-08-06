if (3 < 5) {
    console.log('Yeah I will be excecuted!');
}

var myName = 'mosfiqur';
if (myName === 'mosfiqur') {
    console.log('You are allowed');
}


var myName = 'mosfiqur';
if (myName === 'karim') {
    console.log('You are allowed');
}


var myAge = 20;
if (9 > 10) {
    console.log('Good to go');
}
if (myAge >= 20) {
    console.log('You are adult!');
}
if (myAge < 20) {
    console.log('You are not adult');
}

var myAge = 21;
if (myAge > 20 && myAge < 60) {
    console.log('You are a young person');
}

var age = 21;
if (age > 18) {
    console.log('Now You are adult');
} else {
    console.log('No You are not aged enough to be an Adult')
}


var whatDay = 'friday';
if (whatDay === 'friday') {
    console.log('It is closed today');
} else if (whatDay === 'thursday') {
    console.log('It is partially closed');
} else if (whatDay === 'saturday') {
    'Some office are closed today'
} else {
    console.log('It normal working day today');
}



// nesting statement
var num = 10;
if (num > 1) {
    if (num = 10) {
        console.log('Greater then 10')
    } else {
        console.log('Somewhere between 2 - 10');
    }
}



// task
var a = 5;
var b = 1;
var c = 6;
if (a > b && a > c) {
    console.log('a is bigger')
} else if (b > a && b > c) {
    console.log('b is bigger');
} else {
    console.log('c is bigger');
}






// switch
var weekDay = 'friday';
switch (weekDay) {
    case 'saturday':
        console.log('Saturday! Today is saturday');
        break;
    case 'sunday':
        console.log('sunday! its normal day');
        break;
    case 'monday':
        console.log('monday! Today is closed');
        break;
    case 'tuesday':
        console.log('tuesday! Today is tuesday');
        break;
    case 'wednesday':
        console.log('wednesday! Today is wednesday');
        break;
    case 'thursday':
        console.log('thursday! Today is thursday');
        break;
    case 'friday':
        console.log('friday! Today is closed');
        break;
    default:
        console.log('Not a day');
}

