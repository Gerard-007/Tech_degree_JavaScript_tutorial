var searchStudent;
var searchGuide = "Type 'list' to show all students and 'quit' to exit.";


function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
}

print(searchGuide);

while (true) {
    searchStudent = prompt('Enter the name of a student to search:');
    searchStudent = searchStudent.toLowerCase();
    
    if (searchStudent === 'quit') {
        break;
    } else if (searchStudent === 'list') {
        print(message);
    } else {
        if (students.name.indexOf(searchStudent) > -1) {
            message += '<h2>Student: ' + students.name + '</h2>';
            message += '<p>Track: '  + students.track + '</p>';
            message += '<p>Achievement: ' + students.achievements + '</p>';
            message += '<p>Points: ' + students.points + '</p>';
            print(message);
        } else {
            alert("We dont have such student on our data base!!!");
        }
    }
}