let num;
let maxNum;
let guessForm;
let chosenNum;
let choices= [];

// let validInput = false;
let message = document.getElementById("message");
let startBtn = document.getElementById("start");

function selectMax() {
    guessForm = document.getElementById("guessForm");
    maxNum = document.getElementById("maxNum").value;
    chosenNum = Math.ceil(Number(maxNum));
    
    if(chosenNum != NaN && maxNum > 1) {
        message.innerHTML = `Your chosen maximum number is ${chosenNum} (Your number was rounded up).`;
        num = Math.floor(Math.random() * chosenNum) + 1;

        guessForm.classList = "";
        startBtn.classList = "hide";
    } else {
        message.innerHTML = "You need to input a number greater than 1!";
    }
}

function do_guess() {

    let guess = Number(document.getElementById("guess").value);

    if(guess != NaN && guess >= 1 && guess <= chosenNum && !choices.includes(guess)) {
        if(guess == num) {
            choices.push(guess);
            message.innerHTML = `You got it in ${choices.length} tries! Your choices were ${choices.toString()}`;
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

