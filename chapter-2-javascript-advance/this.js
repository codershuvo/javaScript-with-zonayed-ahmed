var myCustomObj = {
    name: 'Zonayed Ahmed', 
    age: 21, 
    job: 'Student', 
    msg: function() {
        console.log(this); 
    }
}
console.log(myCustomObj.msg()); 



var myCustomObject = {
    name: 'Mosfiqur Rahman', 
    age: 26, 
    job: 'Student', 
    anotherObj: {
        name: 'Shuvo', 
        msg: function() {
            console.log('My name is: ' + this.name); 
        }
    }
}

console.log(myCustomObject.anotherObj.msg()); 