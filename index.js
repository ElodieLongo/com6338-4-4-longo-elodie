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

let previousWordEl = document.getElementById("#previous-word");
let incorrectLettersEl = document.getElementById("#incorrect-letters");
let remainingGuessesEl = document.getElementById("#remaining-guesses");  
  
let winsEl = document.getElementById("#wins");  
let lossesEl = document.getElementById("#losses");  

let wins = 0
let losses = 0
function printRandomWord(){
  
  const randomNumber = Math.floor(Math.random() * words.length);
  const randomWord = words[randomNumber]
  
let element =  document.querySelector("#word-to-guess");
  console.log(element)
}

  printRandomWord()

  
  // contare lunghezza stringa + replace lunghezza per underscore




  
//let key =  document.onKeyUp = function(e);
//let key = e.key.toLowerCase()


document.onkeyup = function(e) {
// access user keypress
}

  
// to reset at the end of game


  
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

/* Notes from course
To change DOM elements:

Text example:
let element =  document.querySelector("#word-to-guess");
element.textContent = "text I want to see"

Image example:
let image = document.querySelector("image")
img.src = "http://picsum.photo/600/300"

Inner HTML To add a string of HTML here replace a p with a list:
let secondP = document.querySelector("p:nth-of-type(2)")
secondP.innerHTML = "<ol>"
<li>red</li>
<li>blue</li>
<li>yellow</li>
</ol>

To create and append elements:
let or = document.createElement("ol")
document.body.appendChild(ol)

To remove elements from DOM
var lisItems = document.querySelectorAll("ol > li")
for(let listitem of lisitems) {
  if (listItem.textContent === "broccoli") {
    listItem.remove()
  }

  Click Events:
The old way is with onClick
The new way:
  btn.addEventListener("click".handleClick) 
  
  function handleClick(){
    }
  
 btn.removeEventListener("click".handleClick) 

To attach the same behaviour to multipl elements (here to all buttons)
let btns = document.querySelectorAll(".buttons > button")
let span = document.getElementById("clicked")
for (let i = 0; i < btns.lenght; i++) {
  btns[i].addEventListener("click".function() {
    span.textContent = this.textContent
  })
}

How to record keyboard events:
grab h2 tag:
var h2 = document.querySelector("h2")
var pre = document.querySelector("pre")

document.onkeyup =function(e) {
h2.textContent = e.key
pre.textContent = JSON.stringify(e. null.2){
  key:e.
})
}

