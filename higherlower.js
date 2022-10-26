let maxNum;
let guessForm;

// let validInput = false;
let message = document.getElementById("message");

function selectMax() {
    guessForm = document.getElementById("guessForm");
    maxNum = document.getElementById("maxNum").value;
    console.log(Number(maxNum));
    
    if(Number(maxNum) != NaN && maxNum > 1) {
        guessForm.classList = "";
    } else {
        message.innerHTML = "You need to input a number greater than 1!";
    }
}

function do_guess() {
    let num = Math.floor(Math.random() * maxNum) + 1;

    let guess = Number(document.getElementById("guess").value);

    if(guess == num) {
        message.innerHTML = "You got it!";
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
    }
    else {
        message.innerHTML = "No, try a higher number.";
    }
}

document.getElementById("start").addEventListener("click", selectMax);

