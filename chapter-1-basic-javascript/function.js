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


function aFunc(parameters) {
    // do something with the parameters
    // return the result
}
aFunc(arguments); 


function sumMachine(a, b) {
    var sum = a + b;
    return sum; 
}
console.log(sumMachine(2, 2)); 
console.log(sumMachine(4, 4)); 

