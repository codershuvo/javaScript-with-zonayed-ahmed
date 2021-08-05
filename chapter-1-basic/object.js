// 2) Non-primitive Data Type:
var rahim = {
    fullName: 'Rahim Miya', 
    age: 21, 
    address: 'Dhaka', 
    job: 'Job Holdar'
}
console.log(rahim); 

rahim.zipCode = 234; 
console.log(rahim);



// add function in object
rahim.welcomeMsg = function() {
    console.log('hello there!');
}

console.log(rahim.welcomeMsg()); 




var karim = {
    fullName: 'Karim Miya', 
    age: 26, 
    address: 'Rajshahi', 
    job: 'Student', 
    welcomeMsg: function() {
        console.log('hello karim')
    }
}
console.log(karim);


// access item in loop
for(item in karim) {
    console.log(item);
}


// object in array
var objArr = {
    normal: 'Normal Item', 
    name: ['Rahim', 'Karim', 'Rafiq', 'Shafiq'], 
    age: [20, 10, 30, 40, 50]
}

const res = objArr.name[2]; 
console.log(res);



// array in object
var arrObj = [
    'zonayed', 
    {
        name: 'rafiq', 
        age: 21, 
        job: 'student'
    }, 
    'Bangladesh'
]

console.log(arrObj[1].name); 