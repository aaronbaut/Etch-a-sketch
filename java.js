const container = document.querySelector('#container')

for(i=0;i<256;i++) {

    const content = document.createElement('div')
    content.classList.add('content')
    container.appendChild(content)
    console.log(content)
    }
