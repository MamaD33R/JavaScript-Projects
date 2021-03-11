function my_Dictionary() {
    var Animal = {              // Added keys and values for my pet skink
        Species: "Reptile",
        Breed: "Blue Tongued Skink",
        Colors: "Orange",
        Age: 2,
        Sound: "Hiss.."
    };
    delete Animal.Species // Deleting this key from being displayed so it reads "undefined"
    document.getElementById("Dictionary").innerHTML = Animal.Species; // Linking this dictionary back to the HTML doc. created
}