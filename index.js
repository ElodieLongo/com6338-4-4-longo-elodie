document.addEventListener("DOMContentLoaded", function () {

  let words = [
    'bananas',
    'grapes',
    'carousel',
    'milkshake',
    'javascript',
    'limousine',
    'chocolate',
    'programming',
    'meatloaf',
    'ukulele',
    'mango'
  ];

  // Get references to HTML elements
  let previousWordEl = document.getElementById("previous-word");
  let incorrectLettersEl = document.getElementById("incorrect-letters");
  let remainingGuessesEl = document.getElementById("remaining-guesses");
  let winsEl = document.getElementById("wins");
  let lossesEl = document.getElementById("losses");
  let wins = 0;
  let losses = 0;
  let randomWord = ""; // Initialize randomWord variable

  function printRandomWord() {
    const randomNumber = Math.floor(Math.random() * words.length);
    randomWord = words[randomNumber]; // Store the random word for checking
    const wordToGuess = "_".repeat(randomWord.length);

    let element = document.getElementById("word-to-guess");
    element.textContent = wordToGuess;

    let remainingGuesses = 10;
    remainingGuessesEl.textContent = remainingGuesses;
  }

  function updateWordToGuess(correctGuesses) {
    const wordArray = randomWord.split("");
    for (let i = 0; i < randomWord.length; i++) {
      if (!correctGuesses.includes(wordArray[i])) {
        wordArray[i] = "_";
      }
    }
    return wordArray.join("");
  }

  let correctGuesses = [];

  function handleKeyPress(key) {
    key = key.toLowerCase();
    if (randomWord.indexOf(key) === -1) {
      // Incorrect guess
      if (!incorrectLettersEl.textContent.includes(key)) {
        incorrectLettersEl.textContent += key + " ";
        remainingGuessesEl.textContent--;
      }
      if (parseInt(remainingGuessesEl.textContent) === 0) {
        // If remaining guesses reach 0, it's a loss
        losses++;
        lossesEl.textContent = losses;
        previousWordEl.textContent = randomWord;
        resetGame();
      }
    } else {
      // Correct guess
      if (!correctGuesses.includes(key)) {
        correctGuesses.push(key);
        const updatedWord = updateWordToGuess(correctGuesses);
        document.getElementById("word-to-guess").textContent = updatedWord;
        if (!updatedWord.includes("_")) {
          // If there are no underscores left, it's a win
          wins++;
          winsEl.textContent = wins;
          previousWordEl.textContent = randomWord;
          resetGame();
        }
      }
    }
  }

  function resetGame() {
    correctGuesses = [];
    incorrectLettersEl.textContent = "";
    remainingGuessesEl.textContent = "10";
    printRandomWord();
  }

  printRandomWord();

  document.onkeyup = function (e) {
    handleKeyPress(e.key);
  };
});
