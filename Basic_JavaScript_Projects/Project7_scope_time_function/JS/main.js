var X = 8 // global variable example

function Addition() { // local variable example
    var Y = 6;
    document.write(4 + Y);
}

function Addition2() {  // error used with console.log
    console.log(X + 20);
}

function timeFunction() {       // if statement function to get return a string depending on the time of day
    if (new Date().getHours() < 18) {
        document.getElementById("Time").innerHTML = "How are you today?";
    }
}

function Age() {
    Age = document.getElementById("Age").value; //  if/else function that displays string if the user is equal to or over 13 yrs old
    if (Age >= 13) {
        Movie = "You are old enough to see this movie!";
    }
    else {
        Movie = "You are not old enough to see this movie!";
    }
    document.getElementById("MovieAge").innerHTML = Movie;
}

function Time_Function() {      // time function that returns strings depending on the time of day
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}