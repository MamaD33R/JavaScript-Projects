var X = 8

function Addition() {
    var Y = 6;
    document.write(4 + Y);
}

function Addition2() {
    console.log(X + 20);
}

function timeFunction() {
    if (new Date().getHours() < 18) {
        document.getElementById("Time").innerHTML = "How are you today?";
    }
}

function Age() {
    Age = document.getElementById("Age").value;
    if (Age >= 13) {
        Movie = "You are old enough to see this movie!";
    }
    else {
        Movie = "You are not old enough to see this movie!";
    }
    document.getElementById("MovieAge").innerHTML = Movie;
}

function Time_Function() {
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