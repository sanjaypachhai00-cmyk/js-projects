/* =========================================
   DRAGON CALCULATOR
========================================= */

let expression = "";
let resultShown = false;
let voiceEnabled = true;

const display = document.getElementById("display");
const statusMessage = document.getElementById("statusMessage");
const voiceToggle = document.getElementById("voiceToggle");

const buttons = document.querySelectorAll(".calc-btn");


/* =========================================
   INITIAL STATE
========================================= */

display.textContent = "0";

statusMessage.textContent =
    "THE DRAGON IS WAITING...";


/* =========================================
   BUTTON CLICK
========================================= */

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;

        // Button animation
        button.classList.add("active");

        setTimeout(() => {
            button.classList.remove("active");
        }, 200);

        // Sound
        playGuitarSound(value);

        // Calculator
        handleInput(value);
    });

});


/* =========================================
   HANDLE INPUT
========================================= */

function handleInput(value) {

    /* =========================
       CLEAR
    ========================= */

    if (value === "AC") {

        expression = "";
        resultShown = false;

        display.textContent = "0";

        statusMessage.textContent =
            "THE DRAGON IS READY...";

        return;
    }


    /* =========================
       BACKSPACE
    ========================= */

    if (value === "BACKSPACE") {

        if (resultShown) {

            expression = "";
            resultShown = false;

        } else {

            expression =
                expression.slice(0, -1);
        }

        display.textContent =
            expression || "0";

        statusMessage.textContent =
            "EDITING THE SPELL...";

        return;
    }


    /* =========================
       EQUAL
    ========================= */

    if (value === "=") {

        calculate();

        return;
    }


    /* =========================
       NUMBER
    ========================= */

    if (/^[0-9]$/.test(value)) {

        if (resultShown) {

            expression = value;
            resultShown = false;

        } else {

            expression += value;
        }

        display.textContent = expression;

        statusMessage.textContent =
            "THE DRAGON IS CALCULATING...";

        return;
    }


    /* =========================
       DECIMAL
    ========================= */

    if (value === ".") {

        if (resultShown) {

            expression = "0.";
            resultShown = false;

        } else {

            const numbers =
                expression.split(/[+\-*/%]/);

            const currentNumber =
                numbers[numbers.length - 1];

            // Don't allow 2.5.6
            if (currentNumber.includes(".")) {
                return;
            }

            // Start decimal with 0
            if (
                expression === "" ||
                /[+\-*/%]$/.test(expression)
            ) {
                expression += "0.";
            } else {
                expression += ".";
            }
        }

        display.textContent = expression;

        return;
    }


    /* =========================
       OPERATORS
    ========================= */

    if (["+", "-", "*", "/", "%"].includes(value)) {

        // Allow negative number
        if (
            expression === "" &&
            value !== "-"
        ) {
            return;
        }


        // Replace previous operator
        if (/[+\-*/%]$/.test(expression)) {

            expression =
                expression.slice(0, -1) + value;

        } else {

            expression += value;
        }


        resultShown = false;

        display.textContent = expression;

        return;
    }

}


/* =========================================
   CALCULATE
========================================= */

function calculate() {

    if (!expression) {
        return;
    }


    try {

        let calculation = expression;


        // Remove operator from the end
        if (/[+\-*/%]$/.test(calculation)) {

            calculation =
                calculation.slice(0, -1);
        }


        /*
            Only allow:
            numbers
            decimal points
            + - * / %
            brackets
        */

        if (!/^[0-9+\-*/%.()\s]+$/.test(calculation)) {

            throw new Error("Invalid expression");
        }


        /* =========================
           PERCENTAGE
        ========================= */

        calculation = calculation.replace(
            /(\d+(?:\.\d+)?)%/g,
            "($1/100)"
        );


        /* =========================
           CALCULATE
        ========================= */

        const answer = Function(
            `"use strict"; return (${calculation})`
        )();


        // Check result
        if (!Number.isFinite(answer)) {

            throw new Error("Invalid result");
        }


        // Avoid extremely long decimals
        const finalAnswer =
            Number.isInteger(answer)
                ? answer
                : Number(answer.toFixed(10));


        /* =========================
           SHOW RESULT
        ========================= */

        expression = String(finalAnswer);

        resultShown = true;

        display.textContent =
            finalAnswer;


        statusMessage.textContent =
            "THE DRAGON HAS SPOKEN!";


        // Make result special
        display.style.transform = "scale(1.15)";

        setTimeout(() => {

            display.style.transform =
                "scale(1)";

        }, 300);


        // Voice
        speak(
            "Congratulations. The answer is " +
            finalAnswer
        );


        // Play victory sound
        playVictorySound();


    } catch (error) {

        expression = "";
        resultShown = true;

        display.textContent = "ERROR";

        statusMessage.textContent =
            "OH NO! THE SPELL FAILED!";


        speak(
            "Oh no. The spell failed."
        );


        playErrorSound();
    }

}


/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener("keydown", (event) => {

    const key = event.key;


    /* Numbers */

    if (/^[0-9]$/.test(key)) {

        handleInput(key);
        playGuitarSound(key);

        return;
    }


    /* Decimal */

    if (key === ".") {

        handleInput(".");
        playGuitarSound(".");

        return;
    }


    /* Operators */

    if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%"
    ) {

        if (key === "/") {
            event.preventDefault();
        }

        handleInput(key);
        playGuitarSound(key);

        return;
    }


    /* Equal */

    if (
        key === "Enter" ||
        key === "="
    ) {

        handleInput("=");
        playGuitarSound("=");

        return;
    }


    /* Backspace */

    if (key === "Backspace") {

        handleInput("BACKSPACE");
        playGuitarSound("BACKSPACE");

        return;
    }


    /* Clear */

    if (key === "Escape") {

        handleInput("AC");
        playGuitarSound("AC");

        return;
    }

});


/* =========================================
   VOICE TOGGLE
========================================= */

voiceToggle.addEventListener("click", () => {

    voiceEnabled = !voiceEnabled;


    if (voiceEnabled) {

        voiceToggle.textContent =
            "🔊 VOICE ON";

        statusMessage.textContent =
            "THE DRAGON CAN SPEAK.";

        speak("Voice activated.");

    } else {

        voiceToggle.textContent =
            "🔇 VOICE OFF";

        statusMessage.textContent =
            "THE DRAGON IS SILENT.";

        speechSynthesis.cancel();
    }

});


/* =========================================
   VOICE
========================================= */

function speak(message) {

    if (!voiceEnabled) {
        return;
    }


    if (!("speechSynthesis" in window)) {
        return;
    }


    speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(message);


    speech.rate = 0.9;
    speech.pitch = 0.7;
    speech.volume = 1;


    speechSynthesis.speak(speech);
}


/* =========================================
   GUITAR SOUND
========================================= */

function playGuitarSound(button) {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;


    if (!AudioContext) {
        return;
    }


    const audio =
        new AudioContext();


    const oscillator =
        audio.createOscillator();

    const gain =
        audio.createGain();


    /* Guitar note frequencies */

    const notes = {

        "0": 130.81,
        "1": 146.83,
        "2": 164.81,
        "3": 196.00,
        "4": 220.00,
        "5": 246.94,
        "6": 293.66,
        "7": 329.63,
        "8": 369.99,
        "9": 440.00,

        ".": 392.00,

        "+": 523.25,
        "-": 493.88,
        "*": 587.33,
        "/": 659.25,
        "%": 698.46,

        "=": 783.99,

        "AC": 110,
        "BACKSPACE": 123.47
    };


    oscillator.type = "triangle";

    oscillator.frequency.value =
        notes[button] || 220;


    /* Volume */

    gain.gain.setValueAtTime(
        0.18,
        audio.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audio.currentTime + 0.45
    );


    oscillator.connect(gain);

    gain.connect(
        audio.destination
    );


    oscillator.start();

    oscillator.stop(
        audio.currentTime + 0.45
    );
}


/* =========================================
   VICTORY SOUND
========================================= */

function playVictorySound() {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;


    if (!AudioContext) {
        return;
    }


    const audio =
        new AudioContext();


    const notes = [
        523.25,
        659.25,
        783.99
    ];


    notes.forEach((frequency, index) => {

        const oscillator =
            audio.createOscillator();

        const gain =
            audio.createGain();


        oscillator.type = "triangle";

        oscillator.frequency.value =
            frequency;


        const start =
            audio.currentTime +
            index * 0.12;


        gain.gain.setValueAtTime(
            0.2,
            start
        );


        gain.gain.exponentialRampToValueAtTime(
            0.001,
            start + 0.4
        );


        oscillator.connect(gain);

        gain.connect(
            audio.destination
        );


        oscillator.start(start);

        oscillator.stop(start + 0.4);

    });

}


/* =========================================
   ERROR SOUND
========================================= */

function playErrorSound() {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;


    if (!AudioContext) {
        return;
    }


    const audio =
        new AudioContext();


    const oscillator =
        audio.createOscillator();

    const gain =
        audio.createGain();


    oscillator.type = "sawtooth";

    oscillator.frequency.value = 100;


    gain.gain.setValueAtTime(
        0.2,
        audio.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audio.currentTime + 0.5
    );


    oscillator.connect(gain);

    gain.connect(
        audio.destination
    );


    oscillator.start();

    oscillator.stop(
        audio.currentTime + 0.5
    );
}