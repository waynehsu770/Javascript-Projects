var X = 10;
function Add_1() {
    document.write(20 + X + "<br>");
}

function Add_2() {
    var A = 2
    document.write(2 + X + A + "<br>"); 
}

function Add_3() {
    document.write(X + A); // This creates an error because A is a local variable
}

Add_1();
Add_2();
Add_3();
document.write("<br>");

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
document.write("<br>");

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = 'You are old enough to vote!';
    }
    else {
        Vote = 'You are not old enough to vote!';
    }
    document.getElementById("How_old").innerHTML = Vote;
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