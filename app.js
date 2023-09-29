alert("Welcome to the Mystery Number!");
let numMax = 100;
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

