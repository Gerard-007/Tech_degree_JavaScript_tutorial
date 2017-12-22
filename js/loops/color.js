var html = '';
var red;
var green;
var blue;
var rgbColor;
var colorDuplicate = false;

function randomRGB() {
	return Math.floor(Math.random() * 256);
}

for (var i = 0; i <= 31; i += 1) {
	red = randomRGB();
	green = randomRGB();
	blue = randomRGB();
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);