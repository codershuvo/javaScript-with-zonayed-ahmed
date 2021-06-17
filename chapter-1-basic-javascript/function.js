function funcName () {
    // Statement
}

var funcName = function () {
    // Statement 
}

var newName = funcName(); 

function helloPrint () {
    console.log('Hello I am from the function'); 
}
helloPrint();


var helloWorld = function () {
    console.log('Hello World!'); 
}
helloWorld();


function sum (a, b) {
    return a + b; 
}
console.log(sum(5, 15)); 
console.log(sum(13, 28));



function printMyName (name, age) {
    console.log('My name is: ' + name + ' and I am ' + age + ' years old!')
}
printMyName('mosfiqur rahman', 25); 




function callMyName (name, callback) {
    var myAge = 20; 
    callback(myAge);
    console.log('It is interesting ? Yes it is Mr. ' + name); 
}
function hello (age) { 
    console.log('I am passed through argument and my age is: ' + age); 
}
callMyName('Mosfiqur Rahman', hello); 
