const container = document.querySelector('#container')

let i = 0;
let x = 256;
for(;i<x;i++) {
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
const body = document.querySelector('body');
const button = document.createElement('button');
button.classList.add('button');
button.innerText = 'Change squares';
body.insertBefore(button, container)


button.addEventListener('click', () =>{
    let foo = prompt('Input number of squares on each side (max 100)')
    x = foo**2;
 })