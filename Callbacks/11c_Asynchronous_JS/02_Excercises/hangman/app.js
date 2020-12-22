const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Deep Purple', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

/**
 * Keyboard-Eventlistener
 * For keyboard-events see https://stackoverflow.com/questions/1444477/keycode-and-charcode
 */
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
});

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (evt) => {

    if (evt.target.readyState === 4) {
        //test 1
        console.log(evt.target);
        //test 2
        /* const data = JSON.parse(evt.target.responseText);
        console.log(data);
        console.log(browserSupportCORS());*/
    }
});

//URL of the puzzle server
request.open('GET', 'http://localhost:3000/puzzle');
request.send();



