let todo = document.querySelector('.todo');
let progress = document.querySelector('.progress');
let done = document.querySelector('.done');
let add = document.querySelector('.add');
let input = document.querySelector('#fname');

function createElement(){
    let element = document.createElement('div');
    element.classList.add('element');
    element.draggable = true;
    element.innerText = input.value;
    todo.appendChild(element);
}

add.addEventListener('click', function (){
    createElement();
    input.value = '';
})

