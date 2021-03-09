
var A = "I like Icecream" //Assigning the string to a variable
                            
window.alert(A); //Variable A will display in an alert box on page


var B = "Hello gamers, I have the blues.", A="I hate chicken", Y="Why is it raining outside?"
var B = B.fontcolor("blue");
var A = A.fontcolor("pink");
var Y = Y.fontcolor("green"); //Given all variables colors and strings
document.write(B + A) //The function to link variable B and A strings together on page

function My_First_Function() { //Defining function and naming it
    var str = "This text is pink!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("pink"); // Using fontcolor method on str variable
    document.getElementById("Pink_Text").innerHTML = result; //Putting the value of result into HTML element with Pink_Text ID
}