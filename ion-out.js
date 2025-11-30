const ionOut = (str) => {
    let result = []
  let arr = str.match(/[^, ]+/g) 
    for (let index in arr) {
        arr[index] = arr[index].replace(/(?<=t)ion/,'')
        if (arr[index].slice(-1)==='t') {
            result.push(arr[index])
        }
    }
    return result
} 
