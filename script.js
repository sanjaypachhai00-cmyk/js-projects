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
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row

    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column

    [0, 4, 8], // Diagonal
    [2, 4, 6]  // Diagonal
];


// =========================
// CELL CLICK EVENT
// =========================

cells.forEach(function(cell) {

    cell.addEventListener("click", function() {

        // Don't allow moves after game ends
        // or on an already occupied cell
        if (cell.textContent !== "" || !gameActive) {
            return;
        }

        // Put X or O inside the cell
        cell.textContent = currentPlayer;


        // Check whether someone won
        checkWinner();


        // Change player if game is still running
        if (gameActive) {

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

            status.textContent =
                "Player " + currentPlayer + "'s Turn";
        }

    });

});


// =========================
// CHECK WINNER
// =========================

function checkWinner() {

    for (let pattern of winningPatterns) {

        const first = cells[pattern[0]].textContent;
        const second = cells[pattern[1]].textContent;
        const third = cells[pattern[2]].textContent;


        // Check if all three cells contain
        // the same player
        if (
            first !== "" &&
            first === second &&
            second === third
        ) {

            // Display winner
            status.textContent =
                "Player " + first + " Wins!";

            // Stop the game
            gameActive = false;


            // Highlight winning cells
            cells[pattern[0]].style.background =
                "rgba(34, 197, 94, 0.35)";

            cells[pattern[1]].style.background =
                "rgba(34, 197, 94, 0.35)";

            cells[pattern[2]].style.background =
                "rgba(34, 197, 94, 0.35)";


            // Automatically start new game
            // after 1.5 seconds
            setTimeout(resetGame, 1500);

            return;
        }
    }


    // =========================
    // CHECK DRAW
    // =========================

    let boardFull = true;

    cells.forEach(function(cell) {

        if (cell.textContent === "") {
            boardFull = false;
        }

    });


    if (boardFull) {

        status.textContent = "It's a Draw!";

        gameActive = false;

        // Automatically restart
        setTimeout(resetGame, 1500);
    }
}


// =========================
// RESET GAME
// =========================

function resetGame() {

    // Clear every cell
    cells.forEach(function(cell) {

        cell.textContent = "";

        // Remove winner highlight
        cell.style.background = "";
    });


    // X starts again
    currentPlayer = "X";

    // Enable game
    gameActive = true;

    // Update status
    status.textContent = "Player X's Turn";
}


// =========================
// RESET BUTTON
// =========================

reset.addEventListener("click", resetGame);