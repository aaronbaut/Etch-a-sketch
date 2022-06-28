const container = document.querySelector('#container')

let i = 0;
// for(;i<256;i++) {
//     const content = document.createElement('div')
//     content.classList.add('content')
//     container.appendChild(content)
//     }

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
    for(;i<foo;i++) {
        const content = document.createElement('div')
        content.classList.add('content')
        container.appendChild(content)
        }
 })