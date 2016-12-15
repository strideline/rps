var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');

var displayUserScore = document.getElementById('sb-userscore');
var displayBotScore = document.getElementById('sb-botscore');

var displaySelection1 = document.getElementById('selection1');
var displaySelection2 = document.getElementById('selection2');
var displayWinner = document.getElementById('winner');

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var botChoice;
var playerChoice;
var winner;

var userScore = 0;
var botScore = 0;

var displayScore = function() {
  displayUserScore.innerHTML = userScore;
  displayBotScore.innerHTML = botScore;
  displaySelection1.innerHTML = playerChoice;
  displaySelection2.innerHTML = botChoice;
  displayWinner.innerHTML = winner;
}

var checkWinner = function() {
  if (playerChoice === 'rock') {
    if (botChoice === 'scissors') {
      userScore++;
      winner = 'You win!';
    } else if (botChoice === 'paper') {
      botScore++;
      winner = 'You Lose : /';
    } else {
      winner = 'You tied : |';
    }
  }
  if (playerChoice === 'paper') {
    if (botChoice === 'rock') {
      userScore++;
      winner = 'You win!';
    } else if (botChoice === 'scissors') {
      botScore++;
      winner = 'You Lose : /';
    } else {
      winner = 'You tied : |';
    }
  }
  if (playerChoice === 'scissors') {
    if (botChoice === 'paper') {
      userScore++;
      winner = 'You win!';
    } else if (botChoice === 'rock') {
      botScore++;
      winner = 'You Lose : /';
    } else {
      winner = 'You tied : |';
    }
  }
  displayScore();
}

var chooseForBot = function() {
  var randNum = getRandomInt(1,3);
  if(randNum === 1) {
    botChoice = 'rock';
  } else if (randNum === 2) {
    botChoice = 'paper';
  } else {
    botChoice = 'scissors';
  }
  checkWinner();
}


rockBtn.addEventListener('click', function(e) {
  playerChoice = 'rock';
  chooseForBot();
});

paperBtn.addEventListener('click', function(e) {
  playerChoice = 'paper';
  chooseForBot();
});

scissorsBtn.addEventListener('click', function(e) {
  playerChoice = 'scissors';
  chooseForBot();
});