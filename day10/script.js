let grid = document.querySelector('.grid');
let c=0;
let score=0;
let life=24;
let Boxes = 24;
let arr = [];
let fonts = ['fa fa-cloud fa-2x','fa fa-shield fa-2x','fa fa-truck fa-2x'
    ,'fa fa-solid fa-circle fa-2x','fa fa-lock fa-2x','fa fa-book fa-2x',
    'fa fa-heart fa-2x','fa fa-user fa-2x','fa fa-play fa-2x',
    'fa fa-fire fa-2x','fa fa-wifi fa-2x','fa fa-anchor fa-2x','fa fa-cloud fa-2x','fa fa-shield fa-2x','fa fa-truck fa-2x'
    ,'fa fa-solid fa-circle fa-2x','fa fa-lock fa-2x','fa fa-book fa-2x',
    'fa fa-heart fa-2x','fa fa-user fa-2x','fa fa-play fa-2x',
    'fa fa-fire fa-2x','fa fa-wifi fa-2x','fa fa-anchor fa-2x'];

let scoreBoard = document.querySelector('.score_dig');
let play_again = document.querySelector('.play_again');
let moves_left = document.querySelector('.left_dig');

function gameOver(str){
    body.removeChild(grid);
    const game_over= document.createElement('div');
    game_over.className = 'over';
    body.appendChild(game_over);
    game_over.innerText = str;
}

function makingGrid(n)
{
    for(let i=0;i<n;i++)
    {
        const content = document.createElement('div');
        content.className = 'content';
        grid.appendChild(content);
        const card = document.createElement('div');
        card.className = 'card';
        content.appendChild(card);
        const card_front = document.createElement('div');
        const card_back = document.createElement('div');
        card_front.classList.add('card_face');
        card_front.classList.add('card_front');
        let random = fonts[Math.floor(Math.random()*fonts.length)];
        card_back.classList = random;
        let index = fonts.indexOf(random);
        fonts.splice(index, 1);
        card_back.classList.add('card_face');
        card_back.classList.add('card_back');
        card.appendChild(card_front);
        card.appendChild(card_back);
    }
}

function doFlip() {
    for (let card of cards) {
        if(score == (Boxes*100)){
            gameOver("YOU WIN");
        }
        card.addEventListener('click', function () {
            if(c===2)
            {
                if(arr[0].innerHTML == arr[1].innerHTML){
                    score=score+100;
                    scoreBoard.innerHTML = score;
                }
                else {
                    arr[0].classList.remove('flip_card');
                    arr[1].classList.remove('flip_card');
                    life--;
                    moves_left.innerText = life;
                }
                c = 0;
                arr = [];
                if(life === 0){
                    gameOver("GAME OVER");
                    play_again.style.marginTop = '30vh';
                    play_again.innerHTML = "Play Again";
                }
            }
            card.classList.add('flip_card');
            arr.push(card);
            c++;
        });
    }
}


makingGrid(Boxes);
let cards = document.querySelectorAll('.card');
let body = document.querySelector('body');
doFlip();

play_again.addEventListener('click',function (){
    window.location.href = '';
})
