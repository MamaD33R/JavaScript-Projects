

function Number_NaN() {
    var res = "";
    res = res + isNaN(0/0) + ": 0/0<br>"; // True, 0 can't be divided by 0
    res = res + isNaN('Cow') + ": Cow<br>"; // True, NaN
    res = res + isNaN(7) + ": 7<br>"; // False, a number
    res = res + isNaN(-6.33) + ": -6.33<br>"; // False, a number
    res = res + isNaN('Hello World') + ": Hello World"; // True, NaN
    document.getElementById("Test1").innerHTML = res; // To return to HTML event
}

function true_false() {
    document.getElementById("boolean").innerHTML = Boolean (8 > 13);
}

function false_true() {
    document.getElementById("boolean2").innerHTML = Boolean (14 <= 15);
}

function not_Function() {
    document.getElementById("not").innerHTML = !( 11 > 12); // this function for the (!)Not operator will return true since this statement is false
}

function not_Function1() {
    document.getElementById("not2").innerHTML = !(5 > 3); // This function for (!)Not operator will return a false since this is a correct statement
}

document.write(typeof "20"); // Defining the data type of "20"
document.write(typeof 7); // Defining the data type of 7
document.write("20" + 7); // Coercion to make 207
document.write(2E310); // To display infinity
document.write(-3E310); // To display -infinity

console.log( 2 + 2 ); // Trying this math problem in console
console.log(5 > 10); // Trying to display false in console
console.log(4 == 21); // Trying to display false again
console.log(17 == 17); // and true

A = "Candy"
B = "Candy"
document.write(A === B); // displaying true for A and B since they share same data type and equal the same

Y = "10"
Z = 10
document.write(Y === Z); // displaying false: different data type but same values

H = 6
G = 7 
document.write(G === H); // displaying false: same data type but different values

J = "Home"
K = 19 
document.write(J === K); // displaying false: different data type and values

document.write(16 < 12 && 10 > 6); // 16 < 12 is false, so the && operator will return this statement false
document.write( 2 > 1 || 9 > 12); // even though 9 isnt greater than 12, this OR operator will return this true since 2 > 1
