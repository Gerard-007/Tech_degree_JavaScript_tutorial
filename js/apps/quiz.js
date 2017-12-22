var correctAnswer = 0;
var wrongAnswer = 0;
var questions = 2;
var messageCorrect = "<h4> The answer is correct </h4>";
var messageWrong = "<h4> The answer is wrong </h4>";
var goldMessage = "<h3>Congrats!!! you earned a Gold Badge</h3>";
var silverMessage = "<h3>Congrats!!! you earned a Silver Badge</h3>";
var bronzeMessage = "<h3>Congrats!!! you earned a Bronze Badge</h3>";


var question1 = prompt("Who is the president of Nigeria?");
	questions -= 1;
	console.log ("question" + questions + "asked");
	if (question1.toUpperCase() === "BUHARI") {
		document.write(messageCorrect);
    	correctAnswer += 1;
    	console.log("No of correct answer: " + correctAnswer);
	} else {
		document.write(messageWrong);
    	wrongAnswer += 1
    	console.log("No of wrong answer: " + wrongAnswer);
	}


var question2 = prompt("Who is the president of United States?");
	questions -= 1;
	console.log ("question" + questions + "asked");
	if (question2.toUpperCase() === "TRUMPH") {
		document.write(messageCorrect);
    	correctAnswer += 1;
    	console.log("No of correct answer: " + correctAnswer);
	} else {
		document.write(messageWrong);
    	wrongAnswer += 1
    	console.log("No of wrong answer: " + wrongAnswer);
	}

var question3 = prompt("Who is the president of North Korea?");
	questions -= 1;
	console.log ("question" + questions + "asked");
	if (question3.toUpperCase() === "KIM") {
		document.write(messageCorrect);
    	correctAnswer += 1;
    	console.log("No of correct answer: " + correctAnswer);
	} else {
		document.write(messageWrong);
    	wrongAnswer += 1
    	console.log("No of wrong answer: " + wrongAnswer);
	}


	document.write("Your Total score for the quiz is: " + correctAnswer );
	document.write(" You failed " + wrongAnswer + " questions");
	console.log("You are out of question");


	if (correctAnswer === 3) {
		document.write(goldMessage);
	} else if (correctAnswer === 2) {
		document.write(silverMessage);
	} else if (correctAnswer === 1) {
		document.write(bronzeMessage);
	} else {
		document.write("<h3>You failed!</h3>");
	}
