// for loop
for (var i = 0; i < 10; i++) {
    console.log('Go ' + i + ' step'); 
}


// do...while loop
var num = 15; 
do {
    console.log('Inside the Loop, num is: ' + num); 
    num += 1; 
} while (num < 10); 
console.log('Outside the loop')



// while statement
var num = 20; 
while (num < 10) { 
    console.log('Inside the Loop'); 
    num += 1; 
}
console.log('Out off the loop');


// break statement:
for(var i = 0; i < 10; i++) {
    if(i === 5) {
        break; 
    }
    console.log('i is now at: ' + i);
}


// continue statement
for(var i = 0; i < 10; i++) {
    if(i === 5 ) {
        console.log(i + ' is skipped'); 
        continue; 
    }
    console.log('i is now at ' + i); 
}