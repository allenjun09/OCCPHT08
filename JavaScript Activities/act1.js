console.log("Activity 1");

let userScore = 81;
console.log("The given score is", userScore);

if (userScore >= 90){
    console.log("The grade is 'A'");
}else if(userScore <= 89 && userScore >= 80){
    console.log("The grade is 'B'");
}else if(userScore <= 79 && userScore >= 70){
    console.log("The grade is 'C'");
}else if(userScore <= 69 && userScore >= 60){
    console.log("The grade is 'D'");
}else{
    console.log("The grade is 'F'");
}

console.log("Activity 3");
let secretNumber = Math.floor(Math.random() * 10) + 1;
var attempts = 0;
let guessedNumber;



