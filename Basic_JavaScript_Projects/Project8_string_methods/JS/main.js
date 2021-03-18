function sentence() {               // concat method
    var part_1 = "Sometimes there isn't ";
    var part_2 = "enough dogs in ";
    var part_3 = "the world.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("string").innerHTML = whole_sentence;
}

function slice_Method() {           // Slice method
    var Sentence = "Where else can I find a magical flower?"
    var Section = Sentence.slice(24,31);
    document.getElementById("slice").innerHTML = Section;
}

function upper_Method() {          // Uppercase method
    var text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = text.toUpperCase();
}

var str = "I found the 'flower', in the flower trees?!"; // search method, struggled getting this to work for some reason
var pos = str.search("flower");
document.getElementById("searching").innerHTML = pos;

function stringnumber() {       // number method
    var x = 6000;
    document.getElementById("Numbers").innerHTML = x.toString();
}

function precision_Method() { // precision method to keep only 50043
    var Y = 50043.224910;
    document.getElementById("precision").innerHTML = Y.toPrecision(5);
}

function fixed_Method() {  // fixed method to round number and keep only 3 decimals
    var num = 86.54467
    var n = num.toFixed(3);
    document.getElementById("fixed").innerHTML = n;
}

function value_Method() {  // valueof method to return primitive value of string object
    var str = "Where is my supersuit?"
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}