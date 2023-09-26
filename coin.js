const inputEl= document.getElementById('example')
const btnEl= document.querySelector('.todo-list_btn')
const fieldEl = document.querySelector('.todo-list_field')



function onBtnClick(){
    // const data = inputEl.value
    if (inputEl.value.length){
        const divEl = document.createElement('div')
        divEl.classList.add('todo-list_item')
        

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        const text = document.createElement('p')
        text.classList.add('todo-list_item-text')
        text.innerText= inputEl.value

        const img= document.createElement('img')
        img.src = 'Vector.svg'

        divEl.appendChild(checkbox)
        divEl.appendChild(text)
        divEl.appendChild(img)

        fieldEl.appendChild(divEl)
        inputEl.value= ''
    }
}

btnEl.addEventListener('click',onBtnClick)

// btnEl.addEventListener('click',() => {
//     console.log('Clicked');
// })