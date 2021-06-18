console.log(11); 

function funcName() {
    // Statement
    // function statement
    console.log('Hello I am from the function'); 
}
funcName(); 

var funName = function() {
    // Statement
    // function expression
    console.log('Hello I am from the function'); 
}
funName(); 


// function aFunc(parameters) {
//     // do something with the parameters
//     // return the result
// }
// aFunc(arguments); 


function sumMachine(a, b) {
    var sum = a + b;
    return sum; 
}
console.log(sumMachine(2, 2)); 
console.log(sumMachine(4, 4)); 


function printMyName(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old.'); 
}
printMyName('Mosfiqur Rahman', 24); 



function callMyName(name, callback) {
    var myAge = 20; 
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr. ' + name); 
}
function hello(age) {
    console.log('I am passed through argument and my age is: '+ age); 
}
callMyName('Mosfiqur Rahman', hello); 




function welcomeMsg(name) {
    console.log('Welcome Mr. ' + name); 
    return function options(menu) {
        console.log('Do you like ' + menu + ' Mr. ' + name); 
    }
}
welcomeMsg('Mosfiqur Rahman') ('Coffee'); 





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







function aFunc(a) {
    console.log('Before changing th property: ' + a.one); 
    a.one = 'two'; 
    console.log('After changing the property: ' + a.one); 
}
var a = {
    one: 'One'
}
aFunc(a); 



