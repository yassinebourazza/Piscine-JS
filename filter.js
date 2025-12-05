function filter(arr, func) {
    let result = []
    for (let i=0; i < arr.length;i++) {
        if (func(arr[i],i,arr)) result.push(arr[i])

    }
     return result
}

function reject(arr,func) {
    let result = []
    for (let i=0; i < arr.length;i++) {
        if (!func(arr[i],i,arr)) result.push(arr[i])

    }
     return result
}

function partition(arr,func) {
    return [filter(arr,func),reject(arr,func)]
}
console.log(filter([1,2,3,4,5,6,7,8,9],(x)=> x<5));
console.log(reject([1,2,3,4,5,6,7,8,9],(x)=> x<5));
console.log(partition([1,2,3,4,5,6,7,8,9],(x)=> x<5));
