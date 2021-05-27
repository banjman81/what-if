const prompt = require('prompt-sync')();

const weight = prompt('Please enter you Earth weight by lbs. ');

var numWeight = Number(weight);

if((isNaN(numWeight)) || numWeight < 1){
    console.log("PLease enter a valid value")
}
else {
    const planet = prompt('please enter the number of the planet. ');
    var numPlanet = Number(planet);

    if((isNaN(numPlanet)) || numPlanet > 6){
    console.log("PLease enter a valid value")
    }
    else{
        if(numPlanet == 1){
            var temp = numWeight * 0.78;
            console.log(`Your weight on Venus is ${temp}lbs.`)
        }
        else if(numPlanet == 2){
            var temp = numWeight * 0.39;
            console.log(`Your weight on Mars is ${temp}lbs.`)
        }
        else if(numPlanet == 3){
            var temp = numWeight * 2.65;
            console.log(`Your weight on Jupiter is ${temp}lbs.`)
        }
        else if(numPlanet == 4){
            var temp = numWeight * 1.17;
            console.log(`Your weight on Saturn is ${temp}lbs.`)
        }
        else if(numPlanet == 5){
            var temp = numWeight * 1.05;
            console.log(`Your weight on Uranus is ${temp}lbs.`)
        }
        else if(numPlanet == 6){
            var temp = numWeight * 1.23;
            console.log(`Your weight on Naptune is ${temp}lbs.`)
        }
    }
}