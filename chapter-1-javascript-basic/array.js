
// 2) Non-primitive Data Type:
var arrayName = new Array('Rahim', 'Karim', 'Rafiq', 'Jabbar'); 

var arrName = ['rafiq', 'karim', 'rahim', 'jabbar']; 
console.log(arrName);


// access array item
for(var i = 0; i < arrName.length; i++) {
    console.log('Name: ' + arrName[i]); 
}

// add an item in array last
arrName.push('Mushfiq'); 
console.log(arrName); 


// remove an item in array last
arrName.pop(); 
console.log(arrName); 


// add an item in array first position
arrName.unshift('Mushfiq'); 
console.log(arrName); 


// remove an item in array first position
arrName.shift(); 
console.log(arrName); 


// access in index
console.log(arrName.indexOf('karim'));; 


// remove for splice
var friendsAge = [14, 16, 18, 22, 24, 26]; 
friendsAge.splice(3); // (3, 2)
console.log(friendsAge);






var allAge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 
var spliceArr = allAge.splice(3); 
console.log(spliceArr); 
console.log(allAge);