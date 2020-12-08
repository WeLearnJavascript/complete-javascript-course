'use strict';

function guestMyNumber(){
    let highscore = 0;
    let score = 0;
    let guessNumber = undefined;
    let secretNumber = undefined;
    let message = "";
    let btnCheckDisabled = false;
    let guessNumberDisabled = false;
    
    const elMessage = document.querySelector(".message");
    const elGuessNumer = document.querySelector("input.guess");
    const elScore = document.querySelector(".score");
    const elHighscore = document.querySelector(".highscore");
    const btnCheck = document.querySelector("button.check");
    const btnReset = document.querySelector("button.again");

    function updateUI(){
        elMessage.textContent = message;
        elScore.textContent = score;
        elHighscore.textContent = highscore;
        btnCheck.disabled = btnCheckDisabled;
        elGuessNumer.disabled = guessNumberDisabled;
        elGuessNumer.value = guessNumber;
        console.log("UI is updated");
    }

    function reset(){
        elGuessNumer.disabled = false;
        btnCheck.disabled = false;

        secretNumber = Math.floor(Math.random() * 100);
        guessNumber = "";
        score= 100;
        console.log("secretNumber", secretNumber);
        updateUI();
    }

    function updateHighscore(){
        if (highscore < score){
            highscore = score;
        }
    }

    function check(){
        console.log("Thinking...")
        message = "Thinking ...";
        guessNumber = elGuessNumer.value;
        if (guessNumber > secretNumber) {
            message = "Too high";
            score--;
        } else if (guessNumber < secretNumber) {
            message = "Too low";
            score--;
        } else {
            message = "Congratulation!";
            guessNumberDisabled = true;
            btnCheckDisabled = true;
            updateHighscore();
        }
        updateUI();
    }

    btnCheck.addEventListener('click', (event) => {
        check();
    })

    btnReset.addEventListener('click', (event) => {
        reset();
    })

    reset();
}

guestMyNumber();