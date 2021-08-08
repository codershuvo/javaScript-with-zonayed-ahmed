// swap
var a = 10, b = 20; 
console.log('Before swap: Value of a: ' + a + ' and value of b: ' + b); 
function swap(a, b) {
    console.log('Before swap inside function: Value of a: ' + a + ' and value of b: ' + b); 
    var temp = a; 
    a = b;
    b = temp; 
    console.log('After swap inside function: Value of a: ' + a + ' and value of b: ' + b); 
}

console.log(swap(a, b)); 
console.log('After swap: Value of a: ' + a + ' and value of b: ' + b); 



// swap for referalse data type
var obj = {
    x: 10, 
    y: 20
}; 
console.log('Before swap: Value of x: ' + obj.x + ' and value of y: ' + obj.y); 
function swap(a) {
    console.log('Before swap inside function: Value of x: ' + a.x + ' and value of y: ' + a.y); 
    var temp = a.x; 
    a.x = a.y;
    a.y = temp; 
    console.log('After swap inside function: Value of x: ' + a.x + ' and value of y: ' + a.y); 
}

console.log(swap(obj)); 
console.log('After swap: Value of x: ' + obj.x + ' and value of y: ' + obj.y); 





var arr = [0, 1, 3, 4, 8]; 

console.dir({});


var onArr = [1, 2, 3, 4, 5]; 
console.dir(onArr);