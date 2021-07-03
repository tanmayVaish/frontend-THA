import questions from "./questions.js";

let infoBox = document.querySelector('.infoBox');
let quizBox = document.querySelector('.quizBox');
let startButton = document.querySelector('.startButton button');
let exit = document.querySelector('.quit');
let cont = document.querySelector('.restart');
let nextBtn =document.querySelector('.nextBtn');
let questionTitle = document.querySelector('.questionTitle');
let options = document.querySelectorAll('.option');
let counter = document.querySelector('#counter');
let timer = document.querySelector('.timerSec');

function startGame(){
    startButton.addEventListener('click',function (){
       startButton.style.display = 'none';
       infoBox.style.display = 'block';
    });
}

function continueGame(){
    exit.addEventListener('click',function (){
        window.location.href = '';
    });
    cont.addEventListener('click',function (){
        infoBox.style.display = 'none';
        quizBox.style.display = 'block';
    });
}

function waiting(ms){
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('')
        }, ms);
    })
}
function nextQuestion(){
    nextBtn.addEventListener('click',async function (){
        for(let question of questions){
            questionTitle.innerHTML = question['question'];
            options[0].innerHTML = question['a'];
            options[1].innerHTML = question['b'];
            options[2].innerHTML = question['c'];
            options[3].innerHTML = question['d'];
            counter.innerHTML = question['id'];
            let option = checkCorrect(question);
            option.classList.remove('correct');
            await waiting(5000);
        }
    });
}

function checkCorrect(question){
    if(question['answer'] == 'a'){
        options[0].classList.add('correct');
        return options[0];
    }
    else if(question['answer'] == 'b'){
        options[1].classList.add('correct');
        return options[1];
    }
    else if(question['answer'] == 'c'){
        options[2].classList.add('correct');
        return options[2];
    }
    else if(question['answer'] == 'd'){
        options[3].classList.add('correct');
        return options[0];
    }
}


startGame();
continueGame();
nextQuestion();
