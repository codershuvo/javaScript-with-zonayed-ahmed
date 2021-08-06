var rahim = {
    fullName: 'Rahim Miya', 
    age: 21, 
    address: 'Dhaka', 
    job: 'Job Holdar'
}
// add value
rahim.zipCode = 6300;

// change value
rahim.job = 'Student'



console.log(rahim.fullName);
console.log(rahim['age']);
console.log(rahim);


rahim.welcomeMsg = function() {
    console.log('Hello There');
}


for(item in rahim) {
    console.log(item);
}


// Object in array
var objArr = {
    normal: 'Normal Item', 
    name: ['Rahim', 'Karim', 'Rafiq', 'Shafiq'], 
    age: [10, 20, 30, 40, 50]
}
console.log(objArr.name[2]);



// Array in Object
var arrObj = [
    'zonayed', 
    {
        name: 'Rafiq', 
        age: 21,
        job: 'Student'
    }, 
    'Bangladesh'
]; 
console.log(arrObj[1]);