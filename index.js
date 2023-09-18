var words = [
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



const randomWord = Math.floor(Math.random() * arr.length);
console.log(randomWord)

const word = arr[randomWord];

return word;


console.log(randomWord)

var headline = document.querySelector("h2")

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
  */
