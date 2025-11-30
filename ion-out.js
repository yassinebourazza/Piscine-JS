const ionOut = (str) => {
  arr = str.match(/[^, ]+/g) 
    for (let index in arr) {
        arr[index] = arr[index].replace(/(?<=t)ion/,'')
    }
    return arr
} 
