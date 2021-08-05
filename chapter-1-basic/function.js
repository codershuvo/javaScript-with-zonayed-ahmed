// 2) Non-primitive Data Type:

function funcName() { //statement function
    // statement 
}

var funcName = function() { // function expression
    // statement
}


function firstTime() {
    console.log('Hello I am from the function')
}
console.log(firstTime());


var secondTime = function() {
    console.log('Hello I am second time for function');
}



// function with parameters
function aFunc(parameters)  {
    // do something with the parameters
    // return the result
}


function sumMechine(a, b) {
    var sum = a + b; 
    return sum; 
}

console.log(sumMechine(12, 17)); 
console.log(sumMechine(2, 7)); 


function printMyName(name, age) {
    console.log('My name is: ' + name + ' and I am ' + age + ' years old.')
}


// callback

function callMyName(name, callBack) {
    var myAge = 20; 
    callBack(myAge)
    console.log('It is interesting? Yes it is Mr. ' + name); 
}
function hello(age) {
    console.log('I am passed through argument and my age is: ' + age);
}

console.log(callMyName('mosfiqur', hello)); 



// return
function welcomeMsg(name) {
    console.log('Welcome Mr. ' + name); 
    return function options(menu) {
        console.log('Do you like  ' + menu + ' Mr. ' + name); 
    }
}




function changeValue(a) {
    console.log('Value of a inside function before changing: ' + a); 
    a = 10; 
    console.log('Value of a inside function after changing: ' + a); 
    return a; 
}
var a = 100; 
console.log('Value of a before changing function is applied: ' + a); 
changeValue(a); 
console.log('Value of a after changing function is applied: ' + a); 


function aFunx(a) {
    console.log('Before changing the property: ' + a.one); 
    a.one = 'two', 
    console.log('After changing the property: ' + a.one); 
}

var a = {
    one: 'one'
}



// function definition 
function aSimpleFunc() {
    console.log('A Simple Function'); 
}


