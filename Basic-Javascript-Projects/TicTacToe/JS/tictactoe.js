// This variable keeps track of whose turn it is
let activePlayer = 'X';
// This array stores an array of moves. Use this to determine win conditions
let selectedSquares = [];

// Function for placing an X or O in a square
function placeXorO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of the selectSquare array
    // to see if it contains the square number clicked on
    if (!selectedSqaures.some(element => element.includes(squareNumber))) {
        // Variable retrieves the HTML element id 
        let select = document.getElementById(squareNumber);
        // This checks who's turn it is 
        if (activePlayer === 'X') {
            // If activePlayer = X the X.png is placed in HTML
            select.style.backgroundImage = 'url("Images/X.png")';
        } else {
            // Else activePlayer = O, O.png is placed in HTML
            select.style.backgroundImage = 'url("Images/O.png")';
        }
        // squareNumber and activePlayer are cocatenated and added to array
        selectedSquares.push(squareNumber + activePlayer);
        // Calls function to check for any win conditions
        checkWinConditions();
        // Condition for changing the active player
        if (activePlayer === 'X') {
            // If activePlayer is X change to O
            activePlayer = 'O';
            // If activePlayer is anything other than X
        } else {
            // Change activePlayer to X
            activePlayer = 'X';
        }
        // This function plays a placement sound
        audio('./Media/Place.mp3');
        // This condition checks if it is the computers turn
        if (activePlayer === 'O') {
            // This function disables clicking for computers turn
            disableClick();
            // This function waits 1 second before computer places an image and enables click
            setTimeout(function() {computersTurn();}, 1000);
        }
        // Return true is needed for computersTurn() to work
        return true;
    }
    // This function results in random square selected by computer
    function computersTurn() {
        // This boolean is neede for while loop
        let success = false;
        // This variable stores a random number from 0-8
        let pickASquare;
        // This condition allows while loop to keep trying if a square is selected already
        while(!success){
            // A random number 0-8 is selected
            pickASquare = String(Math.floor(Math.random()*9));
            // If the random number evaluated returns true, the square hasn't been selected yet
            if (placeXorO(pickASquare)) {
                // This calls the function
                placeXorO(pickASquare);
                // This changes boolean and ends the loop
                success = true;
            };
        }
    }
}

// This function parses the selectedSquares array to search for win conditions
// drawLine() is called to draw a line on ths screen if win condition is met
function checkWinConditions() {
    // X O, 1, 2 Condition
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    // X 3, 4, 5 Condition
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    // X 6, 7, 8 Condition
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    // X 0, 3, 6 Condition
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    // X 1, 4, 7 Condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    // X 2, 5, 8 Condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    // X 6, 4, 2 Condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    // X 0, 4, 8 Condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    // X 0, 4, 8 Condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    // O 0, 1, 2 Condition
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    // O 3, 4, 5 Condition
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    // O 6, 7, 8 Condition
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    // O 0, 3, 6 Condition
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    // O 1, 4, 7 Condition
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    // O 2, 5, 8 Condition
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    // O 6, 4, 2 Condition
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    // O 0, 4, 8 Condition
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    // This condition checks for a tie. If none of the above conditions are ment
    // and 9 squares are selected the code executes
    else if (selectedSquares.length >= 9 ) {
        // This plays the tie game sound
        audio('../Media/Tie.mp3')
        // This function sets a .3 second timer before restGame is called
        setTimeout(function() {resetGame();}, 500);
    }
    // This function checks if an array includes 3 strings. It is used to check
    // for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        // These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // If the 3 variables are all included in the array then true is 
        // returned and else if condition executes the drawLine() function
        if (a === true && b === true && c === true) {return true;}
    }
}

// This function makes our body element temporarily unclickable
function disableClick() {
    // This makes the body unclickable
    body.style.pointerEvents = 'none';
    // This makes body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

// This function takes a string parameter of the path set earlier for placement sound
function audio(audioURL) {
    // Create a new audio obhect and pass the path as parameter
    let audio = new Audio(audioURL);
    // Play method plays the audio sound
    audio.play();
}

// This function utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coodY2) {
    // This line accesses HTML canvas element
    const canvas = document.getElementById('win-lines');
    // This gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    // This line indicates where start of a lines X axies is 
    // x=x1 stores temporary x axis data updated in animation loop
    // y=y1 stores temporary y axis data updated in animation loop
    let x1 = coordX1, y1 = coordY1, x2 = coordX2, y2 = coordY2, x= x1, y = y1;

    // This function interacts with the canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        // Start a new path
        c.beginPath();
        // Move to a starting point in the line 
        c.moveTo(x1, y1);
        // Indicates the end point in the line 
        c.lineTo(x, y);
        // Sets width of the line
        c.lineWidth = 10;
        // Sets color of the line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        // Draws everything laid out above
        c.stroke();
        // Checks if endpoints are reached
        if (x1 <= x2 && y1 <= y2) {
            // Addds 10 to previous end x endpoint
            if ( x < x2) {x += 10;}
            // Adds 10 to previous end y endpoint
            if (y < y2) {y += 10;}
            // Necessary for the 6, 4, 2, win conditions
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        // Necessary for 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if ( x < x2) {x += 10;}
            if (y > y2) { y -= 10;}
            if ( x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
    // This function clears canvas after win line is dranw
    function clear() {
        // Starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        // Clears the canvas
        c.clearRect(0, 0, 608, 608);
        // Stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    // Disallows clicking while the win sound is playing
    disableClick();
    // Plays the win sounds
    audio('../Media/Win.mp3');
    // Calls main animation loop
    animateLineDrawing();
    // Waits 1 second then clears canvas, resets game and allows clicking again
    setTimeout(function() {clear(); resetGame(); }, 1000);
}

// Resets game in event of a tie or win
function resetGame() {
    // This for loop iterates thru each HTML square element
    for (let i = 0; i < 9; i++) {
        // This variable gets the HTML element i
        let square = document.getElementById(String(i));
        // Removes elements backgroundImage
        square.style.backgroundImage = '';
    }
    // Resets array so it is empty for starting over
    selectedSquares = [];
}