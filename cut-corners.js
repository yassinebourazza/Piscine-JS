function round(number) {
    let sign = 1
    if (number<0) {
        number = -number
        sign = -1
    }
    let count = 0
    while (number >= 0.5) {
        count++
        number--
    }
    return count * sign
}

function ceil(number) {
    let sign = 1
    if (number<0) {
        number = -number-1
        sign = -1
    }
    let count = 0
    while (number > 0) {
        count++
        number--
    }
    return count * sign
}

function floor(number) {
     let sign = 1
    if (number<0) {
        number = -number -1
        sign = -1
    }
    let count = 0
    while (number >= 0) {
        count++
        number--
    }
    return count * sign -1
}

function trunc(number) {
        let sign = 1
    if (number<0) {
        number = -number
        sign = -1
    }
    let count = 0
    while (number >= 1) {
        count++
        number--
    }
    return count * sign
}
