window.onload = function() {

randomize = document.getElementById('randomColor');
size = document.getElementById('randomSize');
reset = document.getElementById('reset');
var body = document.getElementsByTagName('body')[0];

function random_color() {
    return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
}

function random_fontSize() {
	return (Math.random() * 50) + 'px';
}

randomize.addEventListener('click', function() {	
	
	body.style.backgroundColor = random_color();
	randomize.style.backgroundColor = random_color();
	randomize.style.color = random_color();
	size.style.backgroundColor = random_color();
	size.style.color = random_color();
	reset.style.backgroundColor = random_color();
	reset.style.color = random_color();

})		

size.addEventListener('click', function() {
	randomize.style.fontSize = random_fontSize();
	size.style.fontSize = random_fontSize();
	reset.style.fontSize = random_fontSize();
})

reset.addEventListener('click', function() { 
	body.style.backgroundColor = 'grey';
	randomize.style.backgroundColor = 'white';
	randomize.style.color = 'black';
	size.style.backgroundColor = 'white';
	size.style.color = 'black';
	size.style.fontSize = '2em';
	randomize.style.fontSize = '2em';
	reset.style.fontSize = '2em';
	reset.style.color = 'black';
	reset.style.backgroundColor = 'white';
})
};