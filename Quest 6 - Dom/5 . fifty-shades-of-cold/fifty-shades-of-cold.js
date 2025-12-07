import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
    let style =document.createElement('style')
    for (let color of colors) {
        style.innerHTML += '.' + color + '{background: ' + color + ';}'
    }
    document.head.append(style)
}
export function generateColdShades() {
    let coldColors = ['aqua','blue','turquoise','green','cyan','navy','purple']
    for (let color of colors) {
        for (let cold of coldColors) {
            if (color.includes(cold)) {
                let div = document.createElement('div')
                div.className = color
                div.textContent = color
                document.body.append(div)
            }
        }
    }
}
export function choseShade(textContent) {
    let divs = document.getElementsByTagName("div")
    // console.log(textContent);
    // console.log(divs);
    for (let div of divs) {
        // console.log(div.className);
        div.className = textContent
    }    
}