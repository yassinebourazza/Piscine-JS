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

const superTypeOf = (any) => 
    (any != null && typeof any.set == "function") ? "Map" :
    (any != null && typeof any.add == "function") ? "Set":
    (typeof any == "number") ? "Number" :
    (Number.isNaN(any)) ? "NaN" :
    (typeof any == "string") ? "String" :
    (typeof any == "boolean") ? "Boolean" :
    (typeof any == "undefined") ? "undefined" :
    (Array.isArray(any)) ? "Array" :
    (typeof any == "object" && !Array.isArray(any) && any !== null) ? "Object" :
    (typeof any == "function") ? "Function" : "null";

console.log(superTypeOf([1,5,4,8,6,2,1,4]));
console.log(superTypeOf([1,5,4,8,6,2,1,4]));
console.log(superTypeOf(new Set([1,5,4,8,6,2,1,4])));
console.log(superTypeOf(new Set([1,5,4,8,6,2,1,4])));
console.log(superTypeOf("hello wolrd js"));
console.log(superTypeOf("hello wolrd js"));
console.log(superTypeOf(new Map([ ['x', 45], ['y', 75], ['radius', 24] ])));
console.log(superTypeOf({ x: 45, y: 75, radius: 24 }));
console.log(superTypeOf({ x: 45, y: 75, radius: 24 }));
console.log(superTypeOf([1, 2, 1, 3]));
console.log(superTypeOf({}));
console.log(superTypeOf(666));
console.log(superTypeOf(null));
console.log(superTypeOf(undefined));




