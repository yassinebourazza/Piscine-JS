function round(numbers) {
    let arr = []
    for (let num of numbers) {
    let sign = 1
    if (num<0) {
        num = -num
        sign = -1
    }
    let count = 0
    while (num >= 0.5) {
        count++
        num--
    }
     arr.push(count * sign)
    }
    return arr
}

function ceil(numbers) {
     let arr = []
    for (let num of numbers) {
    let sign = 1
    if (num<0) {
        num = -num-1
        sign = -1
    }
    let count = 0
    while (num > 0) {
        count++
        num--
    }
     arr.push(count * sign)
    }
    return arr
}

function floor(numbers) {
     let arr = []
    for (let num of numbers) {
     let sign = 1
    if (num<0) {
        num = -num -1
        sign = -1
    }
    let count = 0
    while (num > 0) {
        count++
        num--
    }
    arr.push(count * sign-1)
    }
    return arr
}

function trunc(numbers) {
    let arr = []
    for (let num of numbers) {
        let sign = 1
    if (num<0) {
        num = -num
        sign = -1
    }
    let count = 0
    while (num > 1) {
        count++
        num--
    }
    arr.push(count * sign)
    }
    return arr
}

