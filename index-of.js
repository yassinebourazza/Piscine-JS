function indexOf(arr,compare,start=0) {
    for (let index= start ; index < arr.length;index++) {
        if (arr[index] === compare) {
            return +index
        }
    }
    return -1
}

function lastIndexOf(arr, compare,start=0) {
    let count = -1
     for (let index= start ; index >= 0;index--) {
        if (arr[index] === compare) {
            return +index
        }
    }
    return -1
}

function includes(arr, compare,start=0) {
    for (let index= start ; index < arr.length;index++) {
        if (arr[index] === compare) {
            return true
        }
    }
    return false
}

console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2));
