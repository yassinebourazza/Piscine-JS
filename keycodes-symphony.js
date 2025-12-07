const colors = ["#00BCD4", "#CDDC39", "#FF9800", "#FF4081","#7C4DFF", "#1DE9B6", "#FFEB3B", "#FF5722","#448AFF",
                "#4DD0E1", "#ff8196ff", "#90EE90","#B0E0E6","#9898ffff", "#fff48fff", "#FFE5B4", "#fca2a2ff", "#81ffffff", 
                "#ff7171ff", "#a16060ff", "#5c4a4aff", "#76c2f8ff", "#72ff7eff", "#FCE4EC", "#fff68eff", "#ee81ffff"];


export function compose() {
    document.addEventListener('keydown', (event)=> {
        console.log(event.key);
        if (event.keyCode >=65 && event.keyCode <=90) {
            let div = document.createElement('div')
            div.style.background= colors[event.keyCode-64]
            div.textContent= event.key
            div.className = 'note'
            document.body.append(div)
        } else if (event.key == 'Backspace') {
            let divs = document.getElementsByTagName('div')
            if (divs.length > 0) {
                document.body.removeChild(divs[divs.length-1])
            }
        } else if (event.key == 'Escape') {
            let divs = document.querySelectorAll('div')
            for (let div of divs) {
                div.remove()
            }
        }
    }
)
}