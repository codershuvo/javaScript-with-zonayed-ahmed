// 1.For statement
for(var i = 0; i <= 10; i++) {
    console.log('Go ' + i + ' Step');
}



// 2.do...while statement
var num = 15; 
do {
    console.log('Inside the Loop, num is: ' + num); 
    num += 1; 
} while(num < 10); 
console.log('Outside the loop'); 



// 3. while statement :
var num = 10; 
while (num < 11) {
    console.log('Go to ' + num + ' Step'); 
    num++;
}


// 3. break statement
for (let i = 0; i < 10; i++) {
    if(i === 5) {
        break; 
    }
    console.log('i is now at: ' + i); 
}



// 4. continue statement
for (var i = 0; i < 10; i++) {
    if(i === 5) {
        console.log(i + ' i is skipped'); 
        continue;
    }
    console.log('I is now at ' + i);
}