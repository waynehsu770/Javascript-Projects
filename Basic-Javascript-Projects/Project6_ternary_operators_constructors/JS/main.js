function Vote_Func() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML = Can_Vote + ' to vote.';
}