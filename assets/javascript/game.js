

var chances = 6;
var words = ['Apple', 'Superman', 'Spiderman', 'Wonderwoman'];
var answer = '';
var correct = [];

// Functional Programming
// -- Splitting the functionality of the app into functions
function endGame(won) {
	if ( won ) {
		// code when the user wins and gets the word right
	} else {
		// user lost
	}
}

function setAnswerResult(is_correct) {
	chances--;
	$('#chances').text(chances);

	if ( !chances ) {
		endGame(0);
	}
}

// function chances(a){
// 	chancesCount++;
// 	var pos=(chancesCount*-75) +"px"
// 	// $('#guesses').append("  "+a);
// 	// $('#hangman').css("left",pos);
// 	if(chancesCount==6){
// 		defeatMessage();}
// }//wronganswer

//get key pressed by player
function getUserInput(event) {
	var key = event.keyCode || event.which;
	var letter = String.fromCharCode(key).toLowerCase();
	var check = answer.toLowerCase();
	
	check.split('').forEach(function(val, index) {
		if ( val.indexOf(letter) !== -1 ) {
			correct.push(index);
		}
	});

	//create the random word

	var dashes = '';

	answer.split('').forEach(function(val, index) {
		if ( correct.includes(index) )
			dashes += val;
		else dashes += '_';
	});

	$('#phrase').text(dashes);
}

function setRandomWord() {
	answer = words[Math.floor(Math.random() * words.length)];
}

function createPhrase() {
	var dashes = '';
	var word_length = answer.length;
	// answer = answer.split('');
	for ( var i = 0; i < word_length; i++ ) {
		dashes += '_';
	}
	
	$('#phrase').text(dashes);
}

function startGame() {
	setRandomWord();
	createPhrase();

	$(document).on('keyup', getUserInput);
}

function init() {
	$('#start').on('click', startGame);
}



// Progress Bar Code 
var percent = 100;

function wrongAnswer() {
	chances--;
	percent -= (100 / 6).toFixed();
	$('.life .progress-bar').css('height', percent + '%');
	$('#chances').text(chances);