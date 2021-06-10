// 1. if statement

if(3 < 5) {
    console.log('Yeah I will be excuted!'); 
}

var myName = 'mosfiqur'; 
if(myName === 'shuvo') {
    console.log('You are allowed!');
}


var myAge = 20; 
if(9 > 10) {
    console.log('Good to go'); 
}
if(myAge >= 20) {
    console.log('You are adult'); 
}
if(myAge < 20) {
    console.log('You are not adult'); 
}





// 2. if...else statement
var whatDay = 'Sunday';
if (whatDay === 'Friday') {
    console.log('It is closed today');
} else {
    console.log('it is another day');
}




// 3. if...else if statement
var whatDay = 'Sunday';
if (whatDay === 'Friday') {
    console.log('It is closed today');
} else if(whatDay === 'Monday') {
    console.log('it is another day');
} else if(whatDay === 'Thusday') {
    console.log('it is another day');
} else if(whatDay === 'Sunday') {
    console.log('It is chi');
} else {
    console.log('it not a day'); 
}




var num = 10; 
if(num > 1) {
    if(num > 10) {
        console.log('Greater than 10'); 
    } else {
        console.log('SOmewhere between 2 - 10');
    }
}



// Task
var shuvo = 5679; 
var wahid = 775; 
var nadim = 456; 
if(shuvo > wahid) {
    if(shuvo > wahid) {
        console.log('Shuvo is bigger');
    } else {
        console.log('Wahid is bigger');
    }
} else {
    if(wahid > nadim) {
        console.log('wahid is bigger'); 
    } else {
        console.log('Nadim is bigger');
    }
}





// 4. switch statement
var weekday = 'off'; 
switch(weekday) {
    case 'Saturday': 
        console.log('Satarday ! Today is closed'); 
        break;
    case 'Sunday':
        console.log('Today is sunday'); 
        break; 
    case 'Friday': 
        console.log('Today is off day'); 
        break;
    default: 
        console.log('not a day');
}


var rollNo = 2; 
switch(rollNo) {
    case 1: 
        console.log('Sumit'); 
        break;
    case 2:
        console.log('Jhankar'); 
        break; 
    case 5: 
        console.log('Hasin Haidar'); 
        break;
    default: 
        console.log('not a day');
}


