function round(numbers) {
    if (typeof numbers =="number") {
        let sign = 1
    if (numbers<0) {
        numbers = -numbers
        sign = -1
    }
    let count = 0
    while (numbers >= 0.5) {
        count++
        numbers--
    }
     return count * sign
    }
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
    if (typeof numbers =="number") {
    let sign = 1
    if (numbers<0) {
        numbers = -numbers-1
        sign = -1
    }
    let count = 0
    while (numbers > 0) {
        count++
        numbers--
    }
     return count * sign
    }
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
     if (typeof numbers =="number") {
        let sign = 1
    if (numbers<0) {
        numbers = -numbers -1
        sign = -1
    }
    let count = 0
    while (numbers > 0) {
        count++
        numbers--
    }
     return count * sign-1
     }
     let arr = []
    for (let num of numbers) {
     let sign = 1
    if (num<0) {
        num = -num -1
        sign = -1
    }
    let count = 0
    while (num >= 0) {
        count++
        num--
    }
    arr.push(count * sign-1)
    }
    return arr
}

function trunc(numbers) {
    if (typeof numbers =="number") {
            let sign = 1
    if (numbers<0) {
        numbers = -numbers
        sign = -1
    }
    let count = 0
    while (numbers > 1) {
        count++
        numbers--
    }
     return(count * sign)
    }
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
