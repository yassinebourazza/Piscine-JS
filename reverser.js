function reverse(arr) {
    let result
    if (typeof arr == "string") {
        result = ""
    } else {
        result = []
    }
    for (let i = arr.length-1; i >= 0 ; i--) {
        result.push(arr[i])
    }
    return result
} 
