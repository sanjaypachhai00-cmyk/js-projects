// =========================
// SELECT HTML ELEMENTS
// =========================

const cells = document.querySelectorAll(".cell");
const status = document.querySelector("#status");
const reset = document.querySelector("#reset");

// =========================
// GAME VARIABLES
// =========================

let currentPlayer = "X";
let gameActive = true;

// =========================
// WINNING PATTERNS
// =========================

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// =========================
// AUDIO CONTEXT
// =========================

const audioContext =
    new (window.AudioContext || window.webkitAudioContext)();

// =========================
// BASIC SOUND FUNCTION
// =========================

function playSound(
    frequency,
    duration,
    type = "sine",
    volume = 0.1
) {

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = type;

    oscillator.frequency.value = frequency;

    gainNode.gain.setValueAtTime(
        volume,
        audioContext.currentTime
    );

    gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
    );

    oscillator.connect(gainNode);

    gainNode.connect(audioContext.destination);

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + duration
    );
}

// =========================
// MOVE SOUND
// =========================

function playMoveSound() {

    if (currentPlayer === "X") {

        playSound(
            500,
            0.12,
            "sine",
            0.12
        );

    } else {

        playSound(
            700,
            0.12,
            "sine",
            0.12
        );
    }
}

// =========================
// WIN SOUND
// =========================

function playWinSound() {

    playSound(
        523,
        0.15,
        "sine",
        0.15
    );

    setTimeout(function () {

        playSound(
            659,
            0.15,
            "sine",
            0.15
        );

    }, 150);

    setTimeout(function () {

        playSound(
            784,
            0.3,
            "sine",
            0.18
        );

    }, 300);
}

// =========================
// DRAW SOUND
// =========================

function playDrawSound() {

    playSound(
        300,
        0.2,
        "triangle",
        0.12
    );

    setTimeout(function () {

        playSound(
            250,
            0.3,
            "triangle",
            0.12
        );

    }, 200);
}

// =========================
// SPOKEN VOICE
// =========================

function speak(message) {

    // Stop previous speech
    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(message);

    // Voice speed
    speech.rate = 0.9;

    // Voice pitch
    speech.pitch = 1;

    // Volume
    speech.volume = 1;

    // Try to select an English voice
    const voices =
        window.speechSynthesis.getVoices();

    const englishVoice =
        voices.find(function (voice) {

            return voice.lang.startsWith("en");

        });

    if (englishVoice) {
        speech.voice = englishVoice;
    }

    window.speechSynthesis.speak(speech);
}

// =========================
// CELL CLICK EVENT
// =========================

cells.forEach(function (cell) {

    cell.addEventListener("click", function () {

        // Don't allow clicking an occupied cell
        if (
            cell.textContent !== "" ||
            !gameActive
        ) {
            return;
        }

        // Put X or O inside the cell
        cell.textContent = currentPlayer;

        // Play move sound
        playMoveSound();

        // Check whether somebody won
        checkWinner();

        // Change player only if game is still active
        if (gameActive) {

            if (currentPlayer === "X") {

                currentPlayer = "O";

            } else {

                currentPlayer = "X";
            }

            status.textContent =
                "PLAYER " +
                currentPlayer +
                "'S TURN";
        }
    });
});

// =========================
// CHECK WINNER
// =========================

function checkWinner() {

    // Check all winning combinations
    for (let pattern of winningPatterns) {

        const first =
            cells[pattern[0]].textContent;

        const second =
            cells[pattern[1]].textContent;

        const third =
            cells[pattern[2]].textContent;

        // Check if all three cells contain same symbol
        if (
            first !== "" &&
            first === second &&
            second === third
        ) {

            // Update status
            status.textContent =
                "CONGRATULATIONS! PLAYER " +
                first +
                " WINS!";

            // Stop game
            gameActive = false;

            // Highlight winning cells
            cells[pattern[0]]
                .classList.add("winner");

            cells[pattern[1]]
                .classList.add("winner");

            cells[pattern[2]]
                .classList.add("winner");

            // Play winning sound
            playWinSound();

            // Speak winning message
            speak(
                "Congratulations! Player " +
                first +
                " wins!"
            );

            // Create confetti
            createCelebration();

            // Automatically reset after 5 seconds
            setTimeout(
                resetGame,
                5000
            );

            return;
        }
    }

    // =========================
    // CHECK DRAW
    // =========================

    let boardFull = true;

    cells.forEach(function (cell) {

        if (cell.textContent === "") {

            boardFull = false;

        }

    });

    if (boardFull) {

        // Update status
        status.textContent =
            "OH NO! IT'S A DRAW!";

        // Stop game
        gameActive = false;

        // Play draw sound
        playDrawSound();

        // Speak draw message
        speak(
            "Oh no! It's a draw!"
        );

        // Automatically reset
        setTimeout(
            resetGame,
            5000
        );
    }
}

// =========================
// CELEBRATION EFFECT
// =========================

function createCelebration() {

    for (let i = 0; i < 50; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add(
            "confetti"
        );

        // Random horizontal position
        confetti.style.left =
            Math.random() * 100 + "vw";

        // Random falling speed
        confetti.style.animationDuration =
            (1.5 + Math.random() * 1.5) +
            "s";

        // Random delay
        confetti.style.animationDelay =
            Math.random() * 0.5 +
            "s";

        // Random color
        confetti.style.backgroundColor =
            getRandomColor();

        // Add confetti to page
        document.body.appendChild(
            confetti
        );

        // Remove after animation
        setTimeout(function () {

            confetti.remove();

        }, 3000);
    }
}

// =========================
// RANDOM CONFETTI COLOR
// =========================

function getRandomColor() {

    const colors = [
        "#ffdf00",
        "#ff2020",
        "#ffffff"
    ];

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];
}

// =========================
// RESET GAME
// =========================

function resetGame() {

    // Clear all cells
    cells.forEach(function (cell) {

        cell.textContent = "";

        cell.classList.remove(
            "winner"
        );

    });

    // Start with X
    currentPlayer = "X";

    // Activate game
    gameActive = true;

    // Update status
    status.textContent =
        "PLAYER X'S TURN";

    // Stop any remaining speech
    window.speechSynthesis.cancel();
}

// =========================
// RESET BUTTON
// =========================

reset.addEventListener(
    "click",
    resetGame
);