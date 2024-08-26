const result = document.querySelector('.input')
const buttons = document.querySelectorAll('.button')
const clean = document.querySelector('.clean')
const switchOff = document.querySelector('.switchoff')
const equals = document.querySelector('.equals')
const icon = document.querySelector('.icon')

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const value = button.getAttribute('data-value')
        if(value){
            result.value += value
        }
    })
})

clean.addEventListener('click', ()=>{
    result.value = ''
})

switchOff.addEventListener('click', ()=>{
    result.value = result.value.slice(0, -1)
})

equals.addEventListener('click', ()=>{
    if(result.value){
        result.value = eval(result.value)
    }
})

icon.addEventListener('click', ()=>{
    const background = document.querySelector('.background')
    
    if(background){
        background.classList.toggle('active')
    }
})