import { styles } from "./Quest 6 - Dom/4 . pimp-my-style/pimp-my-style.data.js";
var index = 0
var flag = true

export function pimp() {    
    let button = document.querySelector('button')
    button.classList.toggle(styles[index]);
    // console.log(index);
    
    // console.log(button);
    
    if (flag) {
        index++
    } else {
        index--
    }
    if (index == 15) {
        flag = false
        index--
    }
    if (index == -1) {
        flag = true
        index++
    }
    
    
}