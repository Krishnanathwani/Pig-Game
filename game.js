// RULES FOR THE GAME

/* 

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a '1', all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GL0BAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer,dice;
init();


document.querySelector(".btn-roll").addEventListener('click',function(){
    dice = Math.floor(Math.random()*6)+1;
    document.querySelector('#dice').src = 'dice-'+dice+'.png';
    document.getElementById('dice').style.display = 'block';
    if(dice !== 1){
        roundScore += dice;
        
        document.querySelector("#current-score-"+activePlayer).innerHTML = roundScore;
    }else{
        nextPlayer();
    }

});

document.querySelector(".btn-hold").addEventListener('click',function(){
    scores[activePlayer] += roundScore;
    document.querySelector("#total-score-"+activePlayer).innerHTML = scores[activePlayer];
    
    if(scores[activePlayer] >= 20){
        document.querySelector('.player-name-'+activePlayer).textContent = 'WINNER! '
        document.querySelector('.player-'+activePlayer).classList.add('winner');
        document.querySelector('.player-'+activePlayer).classList.add('active');
        document.getElementById('dice').style.display = 'none';
    }else{
    nextPlayer();
    }
    
});



function nextPlayer(){
    activePlayer==0?activePlayer = 1:activePlayer = 0;
    roundScore = 0;
    document.querySelector("#current-score-0").innerHTML = '0';
    document.querySelector("#current-score-1").innerHTML = '0';
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active'); 
    setTimeout(function(){document.getElementById('dice').style.display = 'none';},500);
    

}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('dice').style.display = 'none';
    document.getElementById('player - 0').innerHTML = 'PLAYER 1';
    document.getElementById('player - 1').innerHTML = 'PLAYER 2';
    document.querySelector("#current-score-0").innerHTML = '0';
    document.querySelector("#current-score-1").innerHTML = '0';
    document.querySelector("#total-score-0").innerHTML = '0';
    document.querySelector("#total-score-1").innerHTML = '0';

    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');
}
function openClose(){
    document.querySelector('.modal').classList.toggle('modal-hidden');
}

document.querySelector('.rules').addEventListener('click',openClose);
document.querySelector('.close').addEventListener('click',openClose);
