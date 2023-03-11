const setOfWords = [
    "My name is Siddharth.",
    "I am a coder.",
    "How are you."
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('typeWords');
const btn = document.getElementById('btn');
let startTime, endTime;

playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
}

btn.addEventListener('click', function() {
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playGame();
    }
})