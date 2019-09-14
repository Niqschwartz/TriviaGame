
// startTimer() 

function startTimer() {
    setTimeout(startTimer, 1000 * 60);
    console.log("Timer Started");

    $("#startGame").on("click", startTimer); 
}
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

    var messages = [ "You Know Your Stuff", "Not Terrible, But I'm Still Judging You", "You're missing something"];
    var gifs = ["assets/images/win.gif", "assets/images/place.gif", "assets/images/lost.gif"]
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
    document.getElementById("gif").src=gifs[range];
}

$("#submit").on("click", check); 






