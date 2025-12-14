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
                id = null
                if (!options.leading) func(...args)
            },timer)
        } 
    }
}


// let t = opThrottle((x)=>{console.log(x)},500,{leading:false, trailing:false})

// t('A')
// t('B')
// t('C')
// setTimeout(()=> {
//         t('d')
//         t('f')
// },600)
