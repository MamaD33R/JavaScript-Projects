function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in "
    + Erik.Vehicle_Year;
}

function Cat(Breed, Color, Hair) {
    this.Cat_Breed = Breed;
    this.Cat_Color = Color;
    this.Cat_Hair = Hair;
}

var Orion = new Cat("Tabby", "Brown and Black", "Short-haired");
var PJ = new Cat("Mixed", "Black and White", "Long-haired")
function catFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "PJ is a " + PJ.Cat_Color + " " + PJ.Cat_Breed + " cat, and is " + PJ.Cat_Hair;
}

function counting() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 50;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}