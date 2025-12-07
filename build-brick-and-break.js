export function build(num) {
    let count = 0
    
    const builder = setInterval(() => {
        num--
        if (num >= 0) {
            
            let div = document.createElement('div')
            div.id = 'brick-' + (++count)
            div.textContent = count
            if ((count+1)%3==0) {
                div.setAttribute('foundation', 'true')
                
            }
            document.body.append(div)
        }
        console.log('div');
        if (num==0) {
            clearInterval(builder)
            console.log('builder break');
        }
        
    },100)

    
}

export function repair(...ids) {
    for (let i=0 ; i< ids.length ; i++) {
        let id = document.getElementById(ids[i])
        if (id.hasAttribute('foundation')) {
            id.setAttribute('data-repaired', 'in progress')
        } else {
            id.setAttribute('data-repaired', true)
        }      
    };
}

export function destroy() {
    let divs = document.getElementsByTagName('div')
    let lastBrickId = "brick-" + divs.length    
    let divDeleted = document.getElementById(lastBrickId)
    divDeleted.remove()
}