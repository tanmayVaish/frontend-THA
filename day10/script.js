let grid = document.querySelector('.grid');
let c=0;
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
            card.style.transform = "rotateY(180deg)";
            c++;
        });
    }
}


makingGrid(24);
let cards = document.querySelectorAll('.card');
doFlip();

// if(c===2) {
//     for(let card of cards) {
//         card.style.transform = "rotateY(180deg)";
//         c = 0;
//     }
// }