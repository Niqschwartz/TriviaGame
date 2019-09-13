
startTimer() 

function startTimer() {
    setTimeout(startTimer, 1000 * 60);
    console.log("Timer Started");


function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "River") {
        correct++;
    }
    if (question2 == "Roseanne") {
        correct++;
    }
    if (question3 == "Guys") {
        correct++;
    }

    var messages = [ "Well La-Di-Freakin-Da!!", "Well Isn't That Special", "You Need More Cowbell"];
    var range;

    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct <3){
        range =1;
    }

    if (correct > 2) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "Correct Answers:  " + correct;
}

$("#submit").on("click", check); 

}




