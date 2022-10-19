function KeyValues() {
    var Car = {
        Brand: "Mercedes",
        Color: 'Blue',
        Class: 'E350',
        Style: 'Coupe',
        Year: 2020
    }
    delete Car.Year // This deletes the key value pair Year: 2020
    document.getElementById('Dictionary').innerHTML = Car.Style;
}