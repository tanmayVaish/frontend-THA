import questions from "./questions.js";

let i = 0;

let previousOption = 0;
let correctCount = 0;

let startBtn = document.querySelector('.startButton');
let infoBox = document.querySelector('.infoBox');

let restart = document.querySelector('.restart');
let quit = document.querySelector('.quit');
let quizBox = document.querySelector('.quizBox');

let questionTitle = document.querySelector('.questionTitle span');
let option = document.querySelectorAll('.option');

let nextBtn = document.querySelector('.nextBtn');

let counter = document.querySelector('#counter');

startBtn.addEventListener('click', function () {
    startBtn.style.display = 'none';
    infoBox.style.display = 'block';
})

quit.addEventListener('click', function () {
    infoBox.style.display = 'none';
    startBtn.style.display = 'block';
})

restart.addEventListener('click', function () {
    infoBox.style.display = 'none';
    quizBox.style.display = 'block';
    addQuestion();
})

nextBtn.addEventListener('click', addQuestion);

function addQuestion() {
    if (i === 10) return;
    if (previousOption != 0) {
        previousOption.classList.remove('correctColor')
    }
    questionTitle.innerHTML = questions[i]['question'];
    option[0].innerText = questions[i]['a'];
    option[1].innerText = questions[i]['b'];
    option[2].innerText = questions[i]['c'];
    option[3].innerText = questions[i]['d'];
    counter.innerText = i + 1;
    checkCorrect(questions[i]);
    i++;
}

function checkCorrect(question) {
    if (previousOption != 0) {
        previousOption.classList.remove('correct');
    }
    if (question['answer'] === 'a') {
        option[0].classList.add('correct');
        applyCorrect(option[0], previousOption);
        previousOption = option[0];
    } else if (question['answer'] === 'b') {
        option[1].classList.add('correct');
        applyCorrect(option[1], previousOption);
        previousOption = option[1];
    } else if (question['answer'] === 'c') {
        option[2].classList.add('correct');
        applyCorrect(option[2], previousOption);
        previousOption = option[2];
    } else if (question['answer'] === 'd') {
        option[3].classList.add('correct');
        applyCorrect(option[3], previousOption);
        previousOption = option[3];
    }
}


function applyCorrect(opt, prev) {
    opt.addEventListener('click', function () {
        if (opt.classList.contains('correct')) {
            opt.classList.add('correctColor');
        }
    });
}

function applyWrong(){

}