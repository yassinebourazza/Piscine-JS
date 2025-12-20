function debounce(func,timer) {
    let deb
    return function(...args) {
        clearTimeout(deb)        
        deb = setTimeout(() => {            
            func(...args)
        }, timer); 
    }   
}

function opDebounce(func, timer, leading = false) {
    let id
    let flag = true;
    return function (...args) {
        clearTimeout(id)
        if (leading && flag) {
            flag = false
            func(...args)
        } 
        id = setTimeout(() => {
            flag = true
            if (!leading) func(...args)
        }, timer)  
    }
}
