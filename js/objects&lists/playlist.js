/*
	In this app we introduced <array || list> to hold number of songs in out
	playlist.
*/

// Initializing our program with playList
var playList = [
	['Hallelujia chorus', 'Handel'], 
	['Glorious', 'Mozart'],
	['Worthy is the lamb', 'Handel'],
	['Amen', 'Handel']
];

// creating a function that uses the keyword <print()> to print messages...
function print(message) {
	document.write(message);
}

// creating a function that prints list in an ordered form
function printSongs(songs) {
	var listHtml = '<ol>';
	for (var c = 0; c < songs.length; c += 1) {
		listHtml += "<li>" + songs[c][0] + " by " + songs[c][1] + "</li>"; // songs[][] 
	}
	listHtml += '</ol>';
	print(listHtml);
}

printSongs(playList);
