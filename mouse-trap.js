export function createCircle() {
    document.addEventListener('click' , (event)=> {
        let circle = document.createElement('div')
        circle.style.background = 'white'
        circle.className = 'circle'
        circle.style.left = event.x -25 + 'px'
        circle.style.top = event.y -25 + 'px'        
        
        document.body.append(circle)
    })
}
export function moveCircle() {
    document.addEventListener('mousemove', (event)=> {
        let divs = document.querySelectorAll('div')
        let box = document.getElementsByClassName('box')[0]
        let boxPosition = box.getBoundingClientRect()

        if (divs.length ===0) {
            return
        }
        
        let div = divs[divs.length-1]
        div.style.left = event.x -25 + 'px'
        div.style.top = event.y -25 + 'px'
       
       if ((parseInt(div.style.top) >= boxPosition.y+1 && parseInt(div.style.top) <= boxPosition.y+boxPosition.height-51) &&
           (parseInt(div.style.left) >= boxPosition.x+1 && parseInt(div.style.left) <= boxPosition.x+boxPosition.width-51) ) {
           div.style.background = 'purple'
        }
        if (div.style.background == 'purple') {
            if (parseInt(div.style.top) < boxPosition.y+1) {
                div.style.top = boxPosition.y+1 + 'px'
            }
            if (parseInt(div.style.top) > boxPosition.y+boxPosition.height-51) {
                div.style.top = boxPosition.y+boxPosition.height-1-50 + 'px'
            }
            if (parseInt(div.style.left) < boxPosition.x+1) {
                div.style.left = boxPosition.x+1 + 'px'
            }
            if (parseInt(div.style.left) > boxPosition.x+boxPosition.width-51) {
                div.style.left = boxPosition.x+boxPosition.width-1-50 + 'px'
            }
        }
        
    })

}
export function setBox() {
    let box = document.createElement('box')
    box.className = 'box'
    document.body.append(box)
}