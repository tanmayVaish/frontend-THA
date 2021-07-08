let todo = document.querySelector('.todo');
let progress = document.querySelector('.progress');
let done = document.querySelector('.done');
let add = document.querySelector('.add');
let input = document.querySelector('#fname');
let holders = document.querySelectorAll('.holder');

function createElement(){
    let element = document.createElement('div');
    let deleteBtn = document.createElement('div');
    element.classList.add('element');
    element.draggable = true;
    element.innerText = input.value;
    deleteBtn.classList.add('deleteBtn');
    element.appendChild(deleteBtn);
    todo.appendChild(element);
}

add.addEventListener('click', function (){
    createElement();
    input.value = '';
    let element = document.querySelector('.element')
    dragStart(element);
    dragOver();
})





function dragStart(element){
    element.addEventListener('dragstart', function (){
        console.log('draging started');
        element.classList.add('dragged');
    });
    element.addEventListener('dragend', function (){
        console.log('draging stopped');
        element.classList.remove('dragged');
    });
}

function dragOver(){
    for(let holder of holders){
        holder.addEventListener('dragover', function (){
            console.log('dragging');
            let dragged = document.querySelector('.dragged');
            holder.appendChild(dragged);

            let delBtn  = document.querySelector('.deleteBtn');
            delBtn.addEventListener('click', function (){
                holder.removeChild(dragged);
            })
        });
    }
}
