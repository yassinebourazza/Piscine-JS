const cutFirst = (arr) => arr.slice(2)
const cutLast = (arr) => arr.slice(0,arr.length-2)
const cutFirstLast = (arr) => arr.slice(2,arr.length-2)
const keepFirst = (arr) => arr.slice(0,2)
const keepLast = (arr) => arr.slice(arr.length-2,arr.length)
function keepFirstLast(arr) {
    if (Array.isArray(arr)) {
          if (arr.length<3) {
            return arr
        }
        return [...arr.slice(0,2),...arr.slice(arr.length-2,arr.length)]
    } else if (typeof arr === 'string') {
        if (arr.length<3) {
            return arr
        }
        return arr.slice(0,2)+arr.slice(arr.length-2,arr.length)
    }
}

