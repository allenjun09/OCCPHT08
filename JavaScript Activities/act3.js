console.log("Activity 3");
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let guessedNumber;
// console.log("The secret number is",secretNumber);

do {
    attempts++;
    let guessedNumber = prompt("Please guess the number between 0 and 10: ");
    if(guessedNumber < secretNumber){
        console.log("Too low! Try again");
    }else if(guessedNumber > secretNumber){
        console.log("Too high! Try again");
    }
    else{
        console.log("Congratulations! You've guessed the correct number!");
        console.log("It took you", attempts,"attempts.");
    }
    

} while (guessedNumber != secretNumber);

