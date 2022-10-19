function Addition() {
    var A = 3 + 2;
    document.getElementById("Add").innerHTML = '3 + 2 = ' + A;
}

function Subtraction() {
    var B = 10 - 4;
    document.getElementById("Minus").innerHTML = '10 - 4 = ' + B;
}

function Multiplication() {
    var C = 2 * 5;
    document.getElementById("Times").innerHTML = '2 * 5 = ' + C;
}

function Division() {
    var D = 6 / 2;
    document.getElementById("Divide").innerHTML = '6 / 2 = ' + D;
}

function Remainder() {
    var E = 10 % 3; // This gets the remainder from 10 divided by 3 which is 1
    document.getElementById("Remain").innerHTML = 'The remainder of 10 / 3 is: ' + E;
}

function IncrementUp() {
    var F = 3;
    F++; // This adds 1 to the assigned value for variable F
    document.getElementById('Up').innerHTML = '3 incremented up is: ' + F;
}

function IncrementDown() {
    var G = 6;
    G--; // This subtracts 1 from the assigned value for variable G
    document.getElementById('Down').innerHTML = '6 incremented down is: ' + G;
}

function Random() {
    var Ran = Math.round(Math.random()*100); // This generates a random whole number between 0 and 100
    document.getElementById('Math').innerHTML = 'The random number between 0 and 100 is: ' + Ran;
}