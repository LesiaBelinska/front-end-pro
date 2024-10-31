"use strict";

let timeLeft = 85;
const MINUTE_IN_SECONDS = 60;

const startCountdown = () => {
    const timerElement = document.querySelector("#timer");

    const updateTimer = () => {
        let minutes = Math.floor(timeLeft / MINUTE_IN_SECONDS);
        let seconds = timeLeft % MINUTE_IN_SECONDS;

        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;

        timerElement.textContent = `${minutes}:${seconds}`;

        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        } else {
            timerElement.textContent = "00:00";
        }
    };

    updateTimer();
};

startCountdown();



