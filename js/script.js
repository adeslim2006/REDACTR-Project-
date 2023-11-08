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


const resultBox = document.getElementById("result");


// In order to prevent the form from submitting
document.getElementById('scrambleForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    

    redactText();
});


function redactText() {
    const originalText = document.getElementById('originalText').value;
    const wordsToRedact = document.getElementById('wordsToRedact').value.split(' ');
    const replacementChar = document.getElementById('replacementChar').value;

    let redactedText = originalText;
    let wordsScanned = 0;
    let wordsMatched = 0;
    let charactersScrambled = 0;

    for (const word of wordsToRedact) {
        const regex = new RegExp(word, 'g');
        redactedText = redactedText.replace(regex, replacementChar.repeat(word.length));
        wordsScanned += originalText.match(new RegExp(`\\b${word}\\b`, 'g')).length;
        wordsMatched++;
        charactersScrambled += word.length;
    }

    document.getElementById('redactedText').textContent = redactedText;

    const stats = `Number of Words Scanned: ${wordsScanned}, Number of Words Matched: ${wordsMatched}, Number of Characters Scrambled: ${charactersScrambled} `;
    document.getElementById('stats').textContent = stats;
}