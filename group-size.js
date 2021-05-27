const prompt = require('prompt-sync')();

const size = prompt('Please enter number students in a classroom. ');

var numsize = Number(size);

var groupThree = 0;

var groupTwo = 0;
if(numsize % 3 == 0){
    groupThree = (numsize / 3);
    console.log(`There are ${groupThree} groups of 3 in the class.`);
}
else{
    groupThree = Math.floor(numsize/3)
    var temp = (groupThree*3);
    var leftOver = numsize - temp;

    if (leftOver == 1){
        groupThree = groupThree -1;
        groupTwo = 2;
        console.log(`There are ${groupThree} groups of 3 in the class and ${groupTwo} groups of 2.`);
    }
    else if (leftOver == 2){
        groupTwo = 1;
        console.log(`There are ${groupThree} groups of 3 in the class and ${groupTwo} group of 2.`);
    }
}

