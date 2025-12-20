function filterValues(obj,func) {
    let newObj = {}
    for (let key in obj) {
        if (func(obj[key])) newObj[key] = obj[key]
    }
    return newObj
}
function mapValues(obj, func) {
     let newObj = {}
    for (let key in obj) {
       newObj[key] =   func(obj[key]) 
    }
    return newObj
}
function reduceValues(obj, func,init=0) {
     let count = init
    for (let key in obj) {
       count = func(count,obj[key]) 
    }
    return count
}