var scores, roundScore, activePlayer;
var winMessage = document.querySelector('#winner');

scores = [0, 0];
roundScore = 0;
activePlayer = Math.floor(Math.random()*2);

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);


// document.querySelector('#player_'+activePlayer+'_currentScore').innerHTML = '<strong>'+dice+'</strong';

document.querySelector('.dice').style.display = 'none';
winMessage.style.display = 'none';

function currentActivePlayer(){
	if (activePlayer === 0){

		document.querySelector('#player_1').style.background = '#f0f0f0';
		document.querySelector('#player_2').style.background = '#fff';
		document.querySelector('#activePlayer_1_icon').style.display = 'inline';
		document.querySelector('#activePlayer_2_icon').style.display = 'none';

	}else{

		document.querySelector('#player_2').style.background = '#f0f0f0';
		document.querySelector('#player_1').style.background = '#fff';
		document.querySelector('#activePlayer_2_icon').style.display = 'inline';
		document.querySelector('#activePlayer_1_icon').style.display = 'none';

	}
}

currentActivePlayer();

function switchPlayer(){
	roundScore = 0;
	document.querySelector('#player_'+activePlayer+'_currentScore').textContent = roundScore;
	if (activePlayer === 1){
		activePlayer = 0;
	}else {
		activePlayer = 1;
	}
	currentActivePlayer();
}

document.querySelector('#rollDice').addEventListener('click', function(){

	var dice = Math.floor(Math.random() * 6) + 1;
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'images/dice/dice_'+ dice + '.jpg';

	if (dice !== 1){
		roundScore += dice;
		document.querySelector('#player_'+activePlayer+'_currentScore').textContent = roundScore;
	}
	else{
		switchPlayer();
	}

	console.log(activePlayer);
});


document.querySelector('#hold').addEventListener('click', function(){
	scores[activePlayer] += roundScore;
	document.querySelector('#player_'+activePlayer+'_score').textContent = scores[activePlayer];

	switchPlayer();

	var player_1_score = scores[0];
	var player_2_score = scores[1];

	if (player_1_score >= 100 && player_2_score < 100){
		console.log('Player 1 Wins');
		winMessage.textContent = 'Player 1 Wins';
		winMessage.style.display = 'block';
	}

	else if (player_2_score >= 100 && player_1_score < 100){
		console.log('Player 2 Wins');
		winMessage.textContent = 'Player 2 Wins';
		winMessage.style.display = 'block';

	}
	

});

var startGame = function(){
	scores = [0, 0]
	roundScore = 0;
	activePlayer = Math.floor(Math.random()*2);
	console.log(activePlayer);

	document.querySelector('.dice').style.display = 'none';

	winMessage.style.display = 'none';

	for (var i=0; i<scores.length; i++){

		document.querySelector('#player_'+i+'_currentScore').textContent = roundScore;
		document.querySelector('#player_'+i+'_score').textContent = scores[i];

	}
	currentActivePlayer();
}


document.querySelector('#newGame').addEventListener('click', startGame);






//document.querySelector('#player_'+activePlayer+'_currentScore').textContent = dice;