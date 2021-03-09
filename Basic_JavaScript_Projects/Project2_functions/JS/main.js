function My_Second_Function () {
    var str = "This text is purple!";
    var result = str.fontcolor("purple");

    document.getElementById("Purple_Text").innerHTML = result;
}

function myFunction () { //Named the function
    var sentence = "Wherever the rainbow ends,"; //created the variable/string
    sentence += " there\'s always a pot of gold!"; //concatenated both string values
    document.getElementById("Concatenate").innerHTML = sentence; // created ID for function to be linked back in the HTML document
}