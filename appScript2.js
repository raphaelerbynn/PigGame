var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

init();


// event handling
document.querySelector('#rollDice').addEventListener('click', function(){
    // random number
    dice = Math.floor(Math.random()*6) + 1;

    // display result
    document.querySelector('.dice').style.display = 'block';

    var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice/dice_'+ dice + '.jpg';
    
    // update the round score IF number is not 1
    if (dice !== 1){
        roundScore += dice;
        document.querySelector('#player_'+activePlayer+'_currentScore').textContent = roundScore;
    }else{
        activePlayer === 0 ? activePlayer=1 : activePlayer=0;
        roundScore = 0;

        if (activePlayer === 0){
            document.querySelector('#activePlayer_1_icon').style.display = 'inline';
            document.querySelector('#activePlayer_2_icon').style.display = 'none';
        }else{
            document.querySelector('#activePlayer_2_icon').style.display = 'inline';
            document.querySelector('#activePlayer_1_icon').style.display = 'none';
        }

        document.getElementById('player_0_currentScore').textContent = '0';
        document.getElementById('player_1_currentScore').textContent = '0';

        // document.querySelector('#player_2').classList.add('active');
        // document.querySelector('#player_1').classList.remove('active');

        document.querySelector('#player_1').classList.toggle('active');
        document.querySelector('#player_2').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }

});

document.querySelector('#newGame').addEventListener('click', init);

document.querySelector('#hold').addEventListener('click', function(){
	scores[activePlayer] += roundScore;
	document.querySelector('#player_'+activePlayer+'_score').textContent = scores[activePlayer];

	// switchPlayer();

	if (scores[activePlayer] >= 20){
        document.querySelector('.player'+activePlayer).textContent = 'Winner!';
        document.querySelector('.player'+activePlayer).style.color = 'red';
	}
	else {
		
	}
	

});



function init(){
    scores[0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('#player_'+activePlayer+'_currentScore').textContent = dice;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('winner').style.display = 'none';
    document.querySelector('#activePlayer_1_icon').style.display = 'inline';
    document.querySelector('#activePlayer_2_icon').style.display = 'none';

    document.querySelector('#player_1').classList.add('active');
    document.querySelector('#player_2').classList.remove('active');

    document.getElementById('player_0_score').textContent = '0';
    document.getElementById('player_1_score').textContent = '0';
    document.getElementById('player_0_currentScore').textContent = '0';
    document.getElementById('player_1_currentScore').textContent = '0';


}
