function Vote_Func() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    // Ternary function using ?
    Can_Vote = (Age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML = Can_Vote + ' to vote.';
}

// Nested function practice
function count_Function() {
    document.getElementById("Nest_Function").innerHTML = Count();
    function Count () {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

// Constructor function for Car objects
function Car(Brand, Model, Year, Color) {
    this.Car_Brand = Brand;
    this.Car_Model = Model;
    this.Car_Year = Year;
    this.Car_Color = Color;
}
// Creating Car objects
var Paul = new Car("Mercedes", "E350", "2020", "Blue");
var Selena = new Car("Honda", "CRV", "2018", "Sand");
var James = new Car("Audi", "A4", "2021", "Red");
// Function to display results from the Constructor function
function carFunction() {
    document.getElementById("Car_Info").innerHTML = "Paul drives a " + Paul.Car_Color +
    "-colored " + Paul.Car_Brand + " " + Paul.Car_Model + " made in " + Paul.Car_Year;
}