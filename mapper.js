function map(arr,func) {
    const result = []
    for (let i = 0 ; i < arr.length;i++) {
        result.push(func(arr[i],i,arr))
    }
    return result
}


function flatMap(arr,func) {
    const result = []
    for (let i = 0 ; i < arr.length;i++) {
        if (Array.isArray(arr[i])) {
        result.push(...flatMap(arr[i],func))
        }
        result.push(func(arr[i],i,arr))
    }
    return result
}

