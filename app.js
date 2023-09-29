alert('\nWelcome to the Mystery Number!');

let difficultyChoose = parseInt(prompt(`Choose the difficulty: \n[1] Easy\n[2] Medium\n[3] Hard \n`));

let pointsEasy = 500, pointsMedium = 250, pointsHard = 100;
let numMaxEasy = 100, numMaxMedium = 250, numMaxHard = 500;
let difficultyEasy = 'Easy', difficultyMedium = 'Medium', difficultyHard = 'Hard';
let finalPoints;

if (difficultyChoose == 1) {
    points = pointsEasy;
    alert(`Chosen Difficulty: ${difficultyEasy}\nYou have ${pointsEasy} points`);
    numMax = numMaxEasy;
} else if (difficultyChoose == 2) {
    points = pointsMedium;
    alert(`Chosen Difficulty: ${difficultyMedium}\nYou have ${pointsMedium} points`);
    numMax = numMaxMedium;
} else if (difficultyChoose == 3) {
    points = pointsHard;
    alert(`Chosen Difficulty: ${difficultyHard}\nYou have ${pointsHard} points`);
    numMax = numMaxHard;
}

let numSecret = parseInt(Math.random() * numMax + 1);
let guess;
attempts = 1;

while (guess != numSecret) {
    guess = prompt(`Enter a number between 1 and ${numMax}: `);

    if (numSecret == guess || guess === null) {

        break;

    } else {

        if (numSecret > guess) {
            points -= 50;
            alert(`Too bad, the mysterious number is more than [${guess}]\nYou lost 50 points\n\n\nYour points: ${points}`);
        } else {
            points -= 50;
            alert(`Too bad, the mysterious number is less than  [${guess}]\nYou lost 50 points\n\n\nYour points: ${points}`);
        }
        attempts++
        finalPoints = points;
    }

    if (points == 0) {
        alert('You lost.');
        break;
    } else {
        continue;
    }
}

let wordTry = attempts > 1 ? 'tries' : 'try';  //string.format
alert(`Great! You guessed the mystery number! [${numSecret}] with ${attempts} ${wordTry}\nYour final points: ${finalPoints}`);


