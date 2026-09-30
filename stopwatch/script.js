let startTime = 0;
let elapsedTime = 0;

let timerInterval = null;

let running = false;

let lapNumber = 0;

const timeDisplay = document.getElementById("time");

const startButton = document.getElementById("startBtn");
const pauseButton = document.getElementById("pauseBtn");
const resetButton = document.getElementById("resetBtn");
const lapButton = document.getElementById("lapBtn");

const lapsContainer = document.getElementById("laps");


/* =========================
   FORMAT TIME
========================= */

function formatTime(milliseconds) {

    const hours = Math.floor(milliseconds / 3600000);

    const minutes = Math.floor(
        (milliseconds % 3600000) / 60000
    );

    const seconds = Math.floor(
        (milliseconds % 60000) / 1000
    );

    const ms = milliseconds % 1000;

    return (
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0") +
        "." +
        String(ms).padStart(3, "0")
    );
}


/* =========================
   UPDATE DISPLAY
========================= */

function updateDisplay() {

    if (!running) {
        timeDisplay.textContent = formatTime(elapsedTime);
        return;
    }

    const currentTime =
        performance.now() - startTime + elapsedTime;

    timeDisplay.textContent =
        formatTime(Math.floor(currentTime));
}


/* =========================
   START
========================= */

function startStopwatch() {

    if (running) {
        return;
    }

    running = true;

    startTime = performance.now();

    timerInterval = setInterval(updateDisplay, 10);

    updateDisplay();

    startButton.textContent = "RUNNING";
}


/* =========================
   PAUSE
========================= */

function pauseStopwatch() {

    if (!running) {
        return;
    }

    elapsedTime =
        Math.floor(
            performance.now() - startTime + elapsedTime
        );

    running = false;

    clearInterval(timerInterval);

    timerInterval = null;

    updateDisplay();

    startButton.textContent = "START";
}


/* =========================
   RESET
========================= */

function resetStopwatch() {

    running = false;

    clearInterval(timerInterval);

    timerInterval = null;

    startTime = 0;

    elapsedTime = 0;

    lapNumber = 0;

    timeDisplay.textContent = "00:00:00.000";

    startButton.textContent = "START";

    lapsContainer.innerHTML =
        '<p class="empty">No laps recorded</p>';
}


/* =========================
   LAP
========================= */

function recordLap() {

    if (!running) {
        return;
    }

    const currentTime =
        Math.floor(
            performance.now() - startTime + elapsedTime
        );

    lapNumber++;

    if (lapNumber === 1) {
        lapsContainer.innerHTML = "";
    }

    const lap = document.createElement("div");

    lap.className = "lap-item";

    lap.innerHTML = `
        <span class="lap-number">
            LAP ${lapNumber}
        </span>

        <span class="lap-time">
            ${formatTime(currentTime)}
        </span>
    `;

    lapsContainer.prepend(lap);
}


/* =========================
   BUTTON EVENTS
========================= */

startButton.addEventListener(
    "click",
    startStopwatch
);

pauseButton.addEventListener(
    "click",
    pauseStopwatch
);

resetButton.addEventListener(
    "click",
    resetStopwatch
);

lapButton.addEventListener(
    "click",
    recordLap
);


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener("keydown", function(event) {

    if (event.code === "Space") {

        event.preventDefault();

        if (running) {
            pauseStopwatch();
        } else {
            startStopwatch();
        }
    }

    if (event.key.toLowerCase() === "r") {
        resetStopwatch();
    }

    if (event.key.toLowerCase() === "l") {
        recordLap();
    }
});


/* Initial display */

updateDisplay();