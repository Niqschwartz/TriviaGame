function check() {

    var question1 = document.quiz.question2.value;
    var question1 = document.quiz.question3.value;
    var question1 = document.quiz.question1.value;
    var correct = 0;
    var wrong = 0;



    if (question1 == "River") {
        correct++;
    }
    if (question2 == "Rosanna") {
        correct++;
    }
    if (question3 == "Guys") {
        correct++;
    }



    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "Correct Answers:  " + correct;
}

startTimer()

function startTimer() {
    setTimeout(startTimer, 1000 * 60);
    console.log("Timer Started");
}
$("#button").on("click", function () {
    alert("CLICKED");
});