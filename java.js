const container = document.querySelector('#container')

let i = 0;
let x = 256;
function makeDiv() {
    let bar = 800/(Math.sqrt(x))
for(;i<x;i++) {
    const content = document.createElement('div')
    content.classList.add('content')
    content.style.padding = `${bar}px ${bar}px ${bar}px ${bar}px`;
    container.appendChild(content)
    }
}
makeDiv();
function deleteDiv() {
    for(;i>0;i--) {
        const content = document.querySelector('.content');
        content.remove();
    }
}


function hoverEffect() {
    const contents = document.querySelectorAll('.content');
    contents.forEach((content) => {
        content.addEventListener('mouseover', (e) => {
            e.target.style.background = 'black';
        });
    });
};
hoverEffect();
const body = document.querySelector('body');
const button = document.createElement('button');
button.classList.add('button');
button.innerText = 'Change squares';
body.insertBefore(button, container)



button.addEventListener('click', () =>{
    deleteDiv();
    let foo = prompt('Input number of squares on each side (max 100)')
    x = foo**2;
    let i=0;
    makeDiv();
    hoverEffect();
    
    
 })