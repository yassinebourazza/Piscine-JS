import { styles } from "./pimp-my-style.data.js";
var index = 0
var flag = true

export function pimp() {    
    let button = document.querySelector('button')
    button.classList.toggle(styles[index]);
    console.log(index);
    
    console.log(button);
    
    if (flag) {
        index++
    } else {
        index--
    }
    if (index == 15) {
        flag = false
        index--
        button.classList.add('unpimp');
    }
    if (index == -1) {
        flag = true
        index++
        button.classList.remove('unpimp');
    }
    
    
}