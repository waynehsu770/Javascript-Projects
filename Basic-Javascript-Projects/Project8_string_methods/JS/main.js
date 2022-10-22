function full_Sentence() {
    var p1 = 'I have ';
    var p2 = 'made this ';
    var p3 = 'into a complete ';
    var p4 = 'sentence.'
    var whole = p1.concat(p2, p3, p4);
    document.getElementById("Concatenate").innerHTML = whole;
}

function slice_Method() {
    var Sentence = 'All work and no play makes Johnny a dull boy.';
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers").innerHTML = X.toString();
}

function precision_Method() {
    var A = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = A.toPrecision(10);
}

