function fruit_LOOPS() {        // this loop function is adding one to z as well as increasing the number on each string printed
    var text = "";
    var z = 0;
    while (z < 11) {
        text += "<br>The number is " + z;
        z++;
    }
    document.getElementById("Loop").innerHTML = text;
}

function string_Length() {        // this function tells you the string length of the sentence provided
    var str = "My toes are cold..";
    var n = str.length;
    document.getElementById("length").innerHTML = n;
}

// These variables being used for for_Loop function
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Cello", "Banjo"]
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
       }
       document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Displayed fruit array and the number of fruit we have by using length function !
function array_Function() {
    var fruits = ["Blueberry", " Watermelon", " Orange", " Kiwi", " Banana"];
    document.getElementById("Array").innerHTML = fruits + "<br>" + fruits.length;
}
// calling this constant function to display values and strings about the farm in HTML doc
function constant_Function() {
    const Farm = {type: "Agricultural", location: "Canada", financial: "Cooperative"}
    Farm.produce = "CABBAGES!";
    Farm.location = "Oregon";
    document.getElementById("constant").innerHTML = "This " + Farm.type + " farm grows " + Farm.produce + " in " + Farm.location;

}


 // let object example
 let jewelry = {
     type: "Ring",
     stone: "Labradorite ",
     metal: "Silver ",
     description : function() {
         return "This piece is a " + jewelry.metal + jewelry.stone + jewelry.type + ". Want to see more?";
     }
 };
 document.getElementById("Jewelry_Object").innerHTML = jewelry.description();