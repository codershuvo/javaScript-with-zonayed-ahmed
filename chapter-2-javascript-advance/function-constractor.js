// var Person = function(name, age, job) {
//     this.name = name; 
//     this.age = age; 
//     this.job = job; 
// }


// new keyword

var Person = function(nameArg, ageArg, jobArg) {
    this.name = nameArg; 
    this.age = ageArg; 
    this.job = jobArg; 
}

var mosfiq = new Person('Mosfiqur Rahman', 25, 'Student'); 
console.log(mosfiq); 



var Personwithmethod = function(name, age, job) {
    this.name = name; 
    this.age = age; 
    this.job = job; 
    this.dateOfBirth = function() {
        console.log(this.name + ' is born in ' + (2018 - this.age)); 
    }
}

var samirwithmethod = new Personwithmethod('Samir Hossain', 22, 'Student'); 

var anotherObject = new Personwithmethod('Mosfiqur', 3, 'Child'); 
console.log(anotherObject); 