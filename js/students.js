var message = '';
var student;
var searchGuide = "Type 'list' to show all students and 'quit' to exit.";

function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
}


function getStudentReport(student) {
    var report += '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: '  + student.track + '</p>';
    report += '<p>Achievement: ' + student.achievements + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    return report;
}


print(searchGuide);

while (true) {
    searchStudent = prompt('Enter the name of a student to search:');
    searchStudent = searchStudent.toLowerCase();
    
    if (searchStudent === null || searchStudent === 'quit') {
        break;
    } 
    
    // looping through our list...
    for (var i = 0; i < students.length; i += 1) 
        student = students[i];
        if (students.name === searchStudent) {
            message = getStudentReport(student);
            print(message);
        } else {
            alert("We dont have such student on our data base!!!");
        }
    }
}
