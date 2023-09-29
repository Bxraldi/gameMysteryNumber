alert("Welcome to the Mystery Number!");
let difficultyChoose = parseInt(prompt(`Choose the difficulty: \n[1]Easy\n[2]Medium\n[3]Hard`));
let numMax;
let difficultyEasy = 'Easy';
let difficultyMedium = 'Medium';
let difficultyHard = 'Hard';

if (difficultyChoose == 1) {
    alert(`Chosen Difficulty: ${difficultyEasy}`)
    numMax = 100;
} else if (difficultyChoose == 2) {
    alert(`Chosen Difficulty: ${difficultyMedium}`)
    numMax = 500;
} else if (difficultyChoose == 3) {
    alert(`Chosen Difficulty: ${difficultyHard}`)
    numMax = 1000;
}

let numSecret = parseInt(Math.random() * numMax + 1);
let guess;
attempts = 1;

while (guess != numSecret) {
    guess = prompt(`Enter a number between 1 and ${numMax}: `);
    if (numSecret == guess) {
        break
    } else {
        if (numSecret > guess) {
            alert(`Too bad, the mysterious number is more than ${guess}`);
        } else {
            alert(`Too bad, the mysterious number is less than  ${guess}`);
        }
        attempts++
    }
}

let wordTry = attempts > 1 ? 'tries' : 'try';  //string.format
alert(`Great! You guessed the mystery number! [${numSecret}] with ${attempts} ${wordTry}`);

