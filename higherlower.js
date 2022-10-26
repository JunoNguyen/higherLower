let num;
let maxNum;
let guessForm;
let chosenNum;
let choices= [];

// let validInput = false;
let message = document.getElementById("message");
let startBtn = document.getElementById("start");
let maxNumInput = document.getElementById("maxNum");
let guessEl = document.getElementById("guess");

function selectMax() {
    guessForm = document.getElementById("guessForm");
    maxNum = maxNumInput.value;
    chosenNum = Math.ceil(Number(maxNum));
    
    if(chosenNum != NaN && maxNum > 1) {
        message.innerHTML = `Your chosen maximum number is ${chosenNum} (Your number was rounded up).`;
        num = Math.floor(Math.random() * chosenNum) + 1;

        guessForm.classList = "";
        startBtn.classList = "hide";
        maxNumInput.setAttribute('readonly', true);
    } else {
        message.innerHTML = "You need to input a number greater than 1!";
    }
}

function do_guess() {

    let guess = Number(guessEl.value);

    if(guess != NaN && guess >= 1 && guess <= chosenNum && !choices.includes(guess)) {
        if(guess == num) {
            choices.push(guess);
            message.innerHTML = `You got it in ${choices.length} tries! Your choices were ${choices.toString()}. To play again, please enter a new maximum number and click start.`;
            maxNumInput.removeAttribute('readonly');
            choices = [];
            guessEl.value = "";
            guessForm.classList = "hide";
            startBtn.classList = "btn btn-primary";
        }
        else if (guess > num) {
            message.innerHTML = "No, try a lower number.";
            choices.push(guess);
        }
        else {
            message.innerHTML = "No, try a higher number.";
            choices.push(guess);
        }
    } else {
        message.innerHTML = `You must choose a number between 1 and ${chosenNum}. Please to not duplicate guesses.`
    }
}

startBtn.addEventListener("click", selectMax);

