const prompt = require('prompt-sync')();

const num = prompt('Please enter a numer to test fizzbuzz. ');

var numFb = Number(num);

if(isNaN(numFb)){
    console.log("Please enter a number.")
}
else{
    if((numFb % 5 == 0) && (numFb % 3 == 0)){
        console.log('Fizzbuzz!!')
    }
    else if(numFb % 5 == 0){
        console.log('Buzz!!')
    }
    else if(numFb % 3 == 0){
        console.log('Fizz!!')
    }
    else{
        console.log("That's not very fizzbuzz of you.")
    }
}