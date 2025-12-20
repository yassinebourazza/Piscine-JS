function pick(obj,arr) {
    let newObj = {}
    if (typeof arr == 'string') {
        arr = [arr]
    }
    for (let key of arr) {
        if (obj[key] != undefined) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}
function omit(obj,arr) {
     let newObj = {}
    if (typeof arr == 'string') {
        arr = [arr]
    }
    let objkey = Object.keys(obj)
    for (let key of objkey) {
        if (!arr.includes(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}