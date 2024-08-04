const questions = [
    {
        question: "What is the capital of United States of America",
        options: ["Washington DC", "Paris", "Ohio", "Lagos"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElements = document.querySelectorAll('.option');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const restartButton = document.getElementById('restart');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElements.forEach((option, index) => {
        option.textContent = question.options[index];
        option.onclick = () => selectOption(index);
    });
}

function selectOption(index) {
    if (index === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    scoreElement.textContent = score;
    totalElement.textContent = questions.length;
    document.getElementById('quiz').classList.add('hide');
    resultElement.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz').classList.remove('hide');
    resultElement.classList.add('hide');
    loadQuestion();
});

loadQuestion();
