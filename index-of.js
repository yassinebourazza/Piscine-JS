function indexOf(arr,compare) {
    for (let index in arr) {
        if (arr[index] === compare) {
            return +index
        }
    }
    return -1
}

function lastIndexOf(arr, compare) {
    let count = -1
     for (let index in arr) {
        if (arr[index] === compare) {
            count = index
        }
    }
    return +count
}

function includes(arr, compare) {
    for (let index in arr) {
        if (arr[index] === compare) {
            return true
        }
    }
    return false
}