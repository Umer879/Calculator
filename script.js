let display = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')
/*
buttons variable return Nodelist nodelist sy single data
 lainy ka liya foreach ka use karty hai
*/
let string = ''
let buttonsArray = Array.from(buttons)
buttonsArray.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1)
            display.value = string
            
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string
        }else if(e.target.innerHTML == '='){
            string = Math.floor(eval(string))
            display.value = string
            string = ''
        }
        else {
            string += e.target.innerHTML
            display.value = string
        }
        
    })
})
// Important Topic 
// substring
//eval()
