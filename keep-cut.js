const cutFirst = (arr) => arr.slice(2)
const cutLast = (arr) => arr.slice(0,arr.length-2)
const cutFirstLast = (arr) => arr.slice(2,arr.length-2)
const keepFirst = (arr) => arr.slice(0,2)
const keepLast = (arr) => arr.slice(arr.length-2,arr.length)
const keepFirstLast = (arr) => (Array.isArray(arr)) ? [...arr.slice(0,2),...arr.slice(arr.length-2,arr.length)] : arr.slice(0,2)+arr.slice(arr.length-2,arr.length) ;
