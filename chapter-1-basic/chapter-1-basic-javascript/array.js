var arrayName = new Array('Rahim', 'Karim', 'Rafiq', 'Jabbar'); 
console.log(arrayName);


var arrName = ['Shuvo', 'Wahid', 'Baijid', 'Nadim']; 
var programmer = arrName[0]; 
console.log('web developer:', programmer);
arrName[1] = 'Mushfiq';
console.log(arrName['length']);
console.log(arrName.length);


for(var i = 0; i < arrName.length; i++) {
    console.log('Name: ' + arrName[i]); 
}


var numbersArray = [15, 26, 45, 23, 75]; 
numbersArray.push(66); 
numbersArray.pop();
var index = numbersArray.indexOf(23); 
var remove = numbersArray.splice(1, 2); // joto no. element theke start r joita remove korbo
console.log(numbersArray); 