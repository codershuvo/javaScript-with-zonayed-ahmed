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