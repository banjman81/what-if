const prompt = require('prompt-sync')();

const age = prompt('how old are you? ');

const numAge = Number(age);

if(isNaN(numAge)){
    console.log('Please enter a valid number.')
}
else if(numAge < 1){
    console.log('Please enter a valid number.')
}
else{
    if(numAge < 16){
        console.log("You can't drive.");
    }
    else if(16<= numAge <= 17){
        console.log("You can drive but not vote.")
    }
    else if(18<= numAge <= 24){
        console.log("You can vote but not rent a car.")
    }
    else if(numAge > 24){
        console.log("You can pretty much do anything.")
    }
}