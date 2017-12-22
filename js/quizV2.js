/*
  - create an array to hold both question and answers
  - prompt users to ask questions from our list.
*/

// Quiz initialization...
var questionsAnswers = [
    {
        question: 'Who is the president of Nigeria', 
        answer: 'buhari'
    },
    {
        question: 'Who is the president of North Korea', 
        answer: 'kim'
    },
    {
        question: 'Who is the president of United States', 
        answer: 'trump'
    }
];
var question;
var answer;
var correctAnswer;
var wrongAnswer;
var response;


// Modifying <document.write> into pointing a specific location to our html using 
// <document.getElementById>
function print(message) {
	document.write(message);
	//	var outputDiv = document.getElementById('output');
	//	outputDiv.innerHTML = message;
}



// This function displays the correct or wrong questions answered
function printQuizAnswers (quizAnswers) {
	var listHtml = '<ol>';
	for (var a = 0; a < quizAnswers.length; a += 1) {
		listHtml += '<li>' + quizAnswers[a] + '</li>';
	}
	listHtml += '</ol>';
	print(listHtml);
} 



// assigning values to pur variables...
correctAnswer = [];
wrongAnswer = [];


// Iterating through our questionAnswer list:...
for (var q = 0; q < questionsAnswers.length; q += 1) {
	question = questionsAnswers[q].question;
	answer = questionsAnswers[q].answer;
	
	response = prompt(question);
	response = response.toLowerCase();
	
	if (response === answer) {
		correctAnswer.push(question);
	} else {
		wrongAnswer.push(question);
	}
}


// Initialize the correct answer and wrong answer to a new variable...
var correct = correctAnswer.length;
var wrong = wrongAnswer.length;


// prints out the total score for correct answers...
if (correct === 1) {
		print("<h4>You got " + correct + " Answer correct </h4>");
	} else if (correct > 1) {
		print("<h4>You got " + correct + " Answers correct </h4>");
	} else {
		print("<h4>You got no right answers this time try again </h4>");
	}

// prints out the total score for wrong answers...
if (wrong === 1) {
		print("<h4>You got " + wrong + " Answer wrong</h4>");
	} else if (wrong > 1) {
		print("<h4>You got " + wrong + " Answers wrong</h4>");
	} else {
		print("<h4>Congrats!!! you you got it all correct</h4>");
	}


print("<h4>These are the questions you got correct: </h4>");
	printQuizAnswers(correctAnswer);

print("<h4>These are the questions you got wrong: </h4>");
	printQuizAnswers(wrongAnswer);

		