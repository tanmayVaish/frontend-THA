let grid = document.querySelector('.grid');

function makingGrid(n)
{
    for(let i=0;i<n;i++)
    {
        const content = document.createElement('div');
        content.className = 'content';
        grid.appendChild(content);
        const content_inner = document.createElement('div');
        content_inner.className = 'content_inner';
        content.appendChild(content_inner);
        const content_front = document.createElement('div');
        const content_back = document.createElement('div');
        content_front.className = 'content_front';
        content_back.className = 'content_back';
        content_inner.appendChild(content_front);
        content_inner.appendChild(content_back);
    }
}

makingGrid(24);