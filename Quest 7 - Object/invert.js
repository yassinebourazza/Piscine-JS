function invert(obj) {
    let newObj = {}
    let args = Object.entries(obj)
    for (let arg of args) { 
        newObj[arg[1]] = arg[0]   
    }
    return newObj
}

// console.log(invert({y:'1',x:'2'}))