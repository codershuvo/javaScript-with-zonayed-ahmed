// call
var myCustomObject = {
    name: 'Mosfiqur Rahman', 
    age: 21, 
    job: 'Student', 
    anotherObject: {
        name: 'Shuvo', 
        value: function() {
            console.log('My name is ' + this.name); 
        }
    }
}



var myCustomObj2 = {
    name: 'Mosfiqur', 
    age: 21, 
    job: 'Student', 
    anotherObject2: {
        name: 'Ahmed Zonayed', 
        value: function() {
            console.log('My name is ' + this.name); 
        }.call(myCustomObj2)
    }
}


var karim = {
    name: 'Karim Rahman', 
    dob: 1996, 
    age: function(currentYear) {
        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!'); 
    }
}

var rahim = {
    name: 'Rahim Abdul', 
    dob: 1986
}


// apply
var myCustomObject3 = {
    name: "mosfiqur rahman", 
    age: 21, 
    job: 'student', 
    anotherObject3: {
        name: 'Shuvo Rahman', 
        value: function() {
            console.log('My name is ' + this.name); 
        }
    }
}




var alim = {
    name: 'Abdul Alim', 
    dob: 1996, 
    age: function(currentYear, msg) {
        console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old!'); 
    }
}

var naim = {
    name: 'Nayem Mahmud', 
    dob: 1986
}



// bind
var myCustom4 = {
    name: 'Ibrahim Kholil', 
    age: 27, 
    job: 'Student', 
    anotherCustom: {
        name: 'Tuhin', 
        value: function() {
            console.log('My name is ' + this.name); 
        }
    }
}


var anotherFunction = myCustom4.anotherCustom.value.bind(myCustom4); 




var dalim = {
    name: 'Abdul Dalim', 
    dob: 1996, 
    age: function(currentYear, msg) {
        console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old!'); 
    }
}

var samad = {
    name: 'Nayem Mahmud', 
    dob: 1988
}

