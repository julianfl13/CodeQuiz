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

const renderQuestion = ({q, a, c}) => {
    quiz.innerHTML = '';

    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.innerText = q;
    div.append(h3);
    a.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        //create correct answer functionality
        button.addEventListener('click',() => null )
        div.append(button);
    });

    
    quiz.append(div);
}

const startQuiz = () => {
    startTimer();
    renderQuestion(questions[0]);
};
quizButton.addEventListener('click', startQuiz);