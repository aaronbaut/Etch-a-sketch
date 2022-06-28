const container = document.querySelector('#container')

let i = 0;
for(;i<256;i++) {

    const content = document.createElement('div')
    content.classList.add('content')
    container.appendChild(content)
    }

const contents = document.querySelectorAll('.content');
contents.forEach((content) => {
    content.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    });
});