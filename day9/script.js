const gridElements = document.querySelector('.grid');

 function makingGrid(n)
 {
     for(let i=0;i<n;i++)
     {
         const content = document.createElement('div');
         content.className = 'content';
         gridElements.appendChild(content);
     }
 }
 makingGrid(36);