const quiz = document.getElementById('quiz');
const quizTimer = document.getElementById('quiz--timer');
const quizButton = document.getElementById('quiz--start');

let timeLeft = 60;

const startTimer = () => {
setInterval(() => {
    timeLeft--;
    if(timeLeft <= 0) return;
    quizTimer.innerText = timeLeft;
} ,1000 );
};

const startQuiz = () => {
    startTimer();
};
quizButton.addEventListener('click', startQuiz);