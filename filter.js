function filter(arr, func) {
    let result = []
    for (let i=0; i < arr.length;i++) {
        if (func(arr[i],i,arr)) result.push(arr[i])

    }
     return result
}