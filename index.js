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
]

window.onload = function(resetGame){

}



function printRandomWord(){
  
  const randomWord = Math.floor(Math.random() * words.length);
let printRandomWord =  document.querySelector("word-to-guess") = randomWord.replaceAll("[a-zA-Z]","_");
};






/* PSEUDOCODE
- Select a random word from words array
- pace it in the  #word-to-guess element with letters replaced by underscore
- it should count 10 remaining guesses in the #remaining-guesses element. 
-User pressed letter key (record that?)
- Check if letter is one of the word to guess
- IF included, replace the letter to the underscore
- IF not included, add the letter to #incorrect-letters and subtract 1 from #remaining-guesses
- When the last correct word is pressed, the game shoud count a win by adding 1 in the #wins element
- After a win the game resets by choosing the next randomly-chosen word and reset all of the other elements
- After a win the guessed word should appear in the #previous-word
- After a loss (when remaining guesses are 0), the game resets and chooses the next random word and adds 1 to "losses"


MARKUP
<div class="game">
  <h2 id="word-to-guess"></h2>
  <div>Previous word: <span id="previous-word"></span></div>
  <div>Incorrect Letters: <span id="incorrect-letters"></span></div>
  <div>Remaining Guesses: <span id="remaining-guesses"></span></div>
  <div class="score">
    <span>Wins: <span id="wins">0</span></span>
    <span>Losses: <span id="losses">0</span></span>
  </div>
</div>
*/
