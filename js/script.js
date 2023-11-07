//  get the value of the unscrambledTextBox (the words in it)
//  input the words to be scanned into the second text box
 /*  scan those specific words in the unscrambledTextBox and replace each of those words
     with the character specified in the character box   */
//  the scrambling should happen after pressing the "Redact now" button

/* Display stats like how many words were scanned,
how many words in the unscrambled text box matched the words in the matching text box,
how many characters were scrambled in total,
how long it took (in seconds) to complete the scrambling task etc. */

// if the charbox is empty then use * to scramble the words as a default


const unscrambledBox = document.querySelector("#unscrambledTextBox");
const charBox = document.querySelector("#CharacterBox");
const wordMatchingBox = document.querySelector("#wordMatchingBox");
const resultBox = document.querySelector("#result");

