// Quiz initialization...
var questionsAnswers = [
    { question: 'Who is the president of Nigeria', answer: 'buhari' },
    { question: 'Who is the president of North Korea', answer: 'kim' },
    { question: 'Who is the president of United States', answer: 'trump' }
];

var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];


function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}


// This function displays the correct or wrong questions answered
function buildList(arr) {
	var listHtml = '<ol>';
	for (var a = 0; a < arr.length; a += 1) {
		listHtml += '<li>' + arr[a] + '</li>';
	}
	listHtml += '</ol>';
	return listHtml;
} 

// Iterating through our questionAnswer list:...
for (var q = 0; q < questions.length; q += 1) {
	question = questions[q].question;
	answer = questions[q].answer;
	
	response = prompt(question);
	response = response.toLowerCase();
	
	if (response === answer) {
		correctAnswers += 1;
		correct.push(question);
	} else {
		wrong.push(question);
	}
}

html = "You got " + correctAnswers + " question(s) right.";
html += "<h2>You got these questions correct:</h2>";
html += buildList(correct);
html += "<h2>You got these questions wrong:</h2>";
html += buildList(wrong);
print(html);