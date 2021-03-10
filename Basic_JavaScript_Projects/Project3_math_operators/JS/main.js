function addition_Function () {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition; // A function to display addition
}

function subtraction_Function () {
    var subtraction = 10 - 2;
    document.getElementById("math2").innerHTML = "10 - 2 = " + subtraction; // Subtraction example
}

function multiplication() {
    var simple_Math = 5 * 10;
    document.getElementById("math3").innerHTML = "5 * 10 = " + simple_Math; // Multiplication example
}

function division () {
    var simple_Div = 70 / 7;
    document.getElementById("math4").innerHTML = "70 / 7 = " + simple_Div; // Division example
}

function more_Math () {
    var simple_Math = (2 + 2) * 20 / 2 - 5;
    document.getElementById("math5").innerHTML = " 2 plus 2, multipled by 20, divided in half, and then subtracted by 5, equals " + simple_Math; // Multiple math function example
}

function modulus_Operator () {
    var simple_Math = 47 % 6;
    document.getElementById("math6").innerHTML = "When you divide 47 by 6 you have a remainder of: "
    + simple_Math
}

function negation_Operator () {
    var x = 43
    document.getElementById("math7").innerHTML = -x;
}

function increment() {
    var Y = 9
    Y++;
    document.getElementById("math8").innerHTML = "What is the increment of 9?: " + Y++
}

function decrement() {
    var X = 7;
    X--;
    document.getElementById("math9").innerHTML = "What is the decrement of 7?: " + X--
}
function rounding() {
    Math.round(6.6);
    document.getElementById("math10").innerHTML = Math.round(6.6); 
}
   



window.alert(Math.random() * 1000); // Window alert box to display a random number within the range of 10000