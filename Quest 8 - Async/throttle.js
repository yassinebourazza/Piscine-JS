function throttle(func,timer) {
    let flag = true
    return function(arg) {
        if (flag) func(arg)
            flag = false
        setTimeout(() => {
            flag = true
        },timer)
    }
}

function opThrottle(func, timer, options = {}) {
    let id
    return function(...args) {
        if (!options.leading && !options.trailing) return
        if (!id) {
            if (options.leading) func(...args)
            id = setTimeout(()=> {
                id = false
                if (!options.leading) func(...args)
            },timer)
        } 
    }
}