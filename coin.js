const inputEl= document.getElementById('example')
const btnEl= document.querySelector('.todo-list_btn')
const fieldEl = document.querySelector('.todo-list_field')

const arr= [
    {
        isDone: false,
        text: 'text'
    }
]

function onBtnClick(){
    // const data = inputEl.value
    if (inputEl.value.length){
    const divEl = document.createElement('div')
    divEl.classList.add('todo-list_example')
    divEl.innerText = inputEl.value

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const text = document.createElement('p')
    text.innerText= inputEl.value

    const img= document.createElement('img')
    img.src = ''

    divEl.appendChild(checkbox)
    divEl.appendChild(text)
    divEl.appendChild(img)

    fieldEl.appendChild(divEl)
    inputEl.value= 'Vector.svg'
    }
}

btnEl.addEventListener('click',onBtnClick)

// btnEl.addEventListener('click',() => {
//     console.log('Clicked');
// })