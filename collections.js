const arrToSet = (arr) => new Set(arr)
const arrToStr = (arr) => arr.join("")
const setToArr = (set) => [...set]
const setToStr = (set) => arrToStr(setToArr(set))
const strToArr = (str) => str.split("")
const strToSet = (str) => new Set(str)
function mapToObj(map) {
    let obj = {}
    for (let prop of map) {
        obj[prop[0]] = prop[1]
    }
    return obj
}
function objToArr(obj) {
    let arr = []
    for (let prop in obj) {
        arr.push(obj[prop])
    }
    return arr
}

function objToMap(obj) {
    let map = new Map()
    for (let prop in obj) {
        map.set(prop,obj[prop])
    }
    return map
}

function arrToObj(arr) {
    let obj = {}
    for (let index in arr) {
        obj[index] = arr[index]
    }
    return obj
}

function strToObj(str) {
    return arrToObj(str)
}
