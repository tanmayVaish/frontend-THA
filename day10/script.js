let grid = document.querySelector('.grid');
let c=0;
let life=12;
let arr = [];
let img = []
let play_again = document.querySelector('.play_again');
let moves_left = document.querySelector('.left_dig');

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
        card_back.classList.add('card_face');
        card_back.classList.add('card_back');
        card.appendChild(card_front);
        card.appendChild(card_back);
    }
}

function doFlip() {
    for (let card of cards) {
        card.addEventListener('click', function () {
            if(c===2)
            {
                arr[0].classList.remove('flip_card');
                arr[1].classList.remove('flip_card');
                c = 0;
                arr=[];
                life--;
                moves_left.innerText = life;
                if(life === 0){
                    body.removeChild(grid);
                    const game_over= document.createElement('div');
                    game_over.className = 'over';
                    body.appendChild(game_over);
                    game_over.innerText = "Game Over";
                }
            }
            card.classList.add('flip_card');
            arr.push(card);
            c++;
        });
    }
}


makingGrid(24);
let cards = document.querySelectorAll('.card');
let body = document.querySelector('body');
doFlip();

play_again.addEventListener('click',function (){
    window.location.href = '';
})
