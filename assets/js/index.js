const quiz = document.getElementById('quiz');
const quizTimer = document.getElementById('quiz--timer');
const quizButton = document.getElementById('quiz--start');

let timeLeft = 60;
let currQuestions = 0;

const startTimer = () => {
    //run this block of code every 1000ms
    //
setInterval(() => {
    timeLeft--;
    quizTimer.innerText = timeLeft;
} ,1000 );
};

const checkAnswer = (userAnswer, correctAnswer) => {
    console.log(userAnswer);
    console.log(correctAnswer);

    if(currQuestions == questions.length || timeLeft == 0){
        console.log("Game Over");
        console.
        endQuiz();
    }
    console.log(currQuestions);
    console.log(questions.length);

    if(userAnswer !== correctAnswer ){
        timeLeft -= 10;
        currQuestions++;
        handleQuiz();
        renderQuestion(questions[currQuestions]);

        
    }else{
    currQuestions++;
    console.log(currQuestions);
    renderQuestion(questions[currQuestions]);
    
    }

}

const renderQuestion = ({q, a, c}) => {
   //index = Math.floor(Math.random() * questions.length);


    quiz.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'flex column align-center w-100';
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex row wrap align-center justify-center w-100';
    const h3 = document.createElement('h3');
    h3.innerText = q;
    div.append(h3);
    a.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        //create correct answer functionality
        button.addEventListener('click',() => checkAnswer(index, c) );
        buttonContainer.append(button);
        
    });

    div.append(buttonContainer);
    quiz.append(div);
}
const endQuiz = () => {
    quiz.innerHTML = '';
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.id = 'quiz--highscore';
    input.placeholder = 'Enter you Nick Name';
    const button = document.createElement('button');
    button.addEventListener('click', () => {
        const input = document.getElementById('quiz--highscore');
        const nickName = input.value;
        localStorage.setItem('user',nickName);
    });
    div.append(input);
    div.append(button);
    quiz.append(div);
}

const handleQuiz = () => {
    startTimer();
    

    renderQuestion(questions[currQuestions]);
    //console.log("hello");
};

quizButton.addEventListener('click', handleQuiz);

//when adding code you want it to incorporate in without breaking your other code