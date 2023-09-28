var words = [ 'bananas', 'grapes', 'carousel', 'milkshake', 'javascript', 'limousine', 'chocolate', 
'programming', 'meatloaf', 'ukulele', 'mango' ];

const score = {
  wins: 0,
  losses: 0,
  previousWord: null
}

const singleGame = {
  word: null,
  remainingGuesses: 10,
  incorrectLettersArr: [],
  guessedLettersArr: []
}

let previousWordEl, incorrectLettersEl, remainingGuessesEl, winsEl, lossesEl, wordToGuessEl;

document.addEventListener("DOMContentLoaded", function () {
  previousWordEl = document.getElementById("previous-word");
  incorrectLettersEl = document.getElementById("incorrect-letters");
  remainingGuessesEl = document.getElementById("remaining-guesses");
  winsEl = document.getElementById("wins");
  lossesEl = document.getElementById("losses");
  wordToGuessEl = document.getElementById("word-to-guess");

  startSingleGame();
  
  document.onkeyup = function (e) {
    handleKeyPress(e.key);
  };
  
});

function startSingleGame(previousWord = null) {
  previousWordEl.textContent = previousWord;
  singleGame.word = words[Math.floor(Math.random() * words.length)];
  console.log(singleGame.word)
  wordToGuessEl.textContent = "_".repeat(singleGame.word.length);
  remainingGuessesEl.textContent = 10;
  incorrectLettersEl.textContent = "";
  singleGame.remainingGuesses = 10;
  singleGame.incorrectLettersArr = [];
  singleGame.guessedLettersArr = [];
}



function handleKeyPress(key) {
  key = key.toLowerCase();
  const isALetter = key.match(/^[a-z]$/);

  if (isALetter && !singleGame.incorrectLettersArr.includes(key) && 
   !singleGame.guessedLettersArr.includes(key)) {

    if (singleGame.word.includes(key)) {
      singleGame.guessedLettersArr.push(key);
      const strAsArr = singleGame.word.split("");
      const wordToGuessAsArr = wordToGuessEl.textContent.split("");

      strAsArr.forEach((letter, i) => {
        if (key === letter) {
          wordToGuessAsArr[i] = key;
        }
      });

      wordToGuessEl.textContent = wordToGuessAsArr.join('');

      if (strAsArr.every(letter => singleGame.guessedLettersArr.includes(letter))) {
        score.wins++;
        winsEl.textContent = score.wins;
        startSingleGame(singleGame.word);
      }

    } else {
      singleGame.incorrectLettersArr.push(key);
      incorrectLettersEl.textContent += " " + key;
      singleGame.remainingGuesses--;
      remainingGuessesEl.textContent--;

      if (singleGame.remainingGuesses === 0) {
        score.losses++;
        lossesEl.textContent = score.losses;
        startSingleGame(singleGame.word);
      }
    }

  }

}
