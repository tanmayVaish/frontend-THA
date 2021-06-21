
function makingGrid(n)
{
    for(let i=0;i<n;i++)
    {
        const content = document.createElement('div');
        content.className = 'content';
        gridElements.appendChild(content);
    }
}


function click(contents)
{
    for(let content of contents)
    {
        content.addEventListener('click',function ()
        {
            let booked = document.getElementById('book');
            let left = document.getElementById('left');

            if(content.classList.contains('content_clicked')){
                content.classList.remove('content_clicked');
            }
            else{
                content.classList.add('content_clicked');
            }
        })
    }
}

const gridElements = document.querySelector('.grid');
const contents = document.getElementsByClassName('content');
makingGrid(36);
click(contents);
console.log(c);

