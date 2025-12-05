function map(arr,func) {
    const result = []
    for (let i = 0 ; i < arr.length;i++) {
        result.push(func(arr[i],i,arr))
    }
    return result
}


function flatMap(arr,func) {
    let result = []
    for (let i = 0 ; i < arr.length;i++) {
        let res = func(arr[i],i,arr)
        if (Array.isArray(res)) {
            result.push(...res)
        } else {
            result.push(res)
    }
    }
    return result
}

console.log(flatMap([1, 2, 3], (n) => [n, n]));
