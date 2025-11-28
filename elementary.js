function multiply(num1,num2) {
    let result = 0
    let sign = 1
    if (num2 === 0) {
        return 0
    } 
    if (num2 < 0) {
        num2 = -num2
        sign = -1
    }
    for (let i=0 ; i<num2 ;i++) {
        result += num1
    }
    if (sign == -1) {
        return -result
    }
    return result
}

function divide(num1,num2) {
    let result = 0
    let sign = 1
    if (num2 === 0) {
        return Infinity
    }
    if (num1 < 0) {
        num1 = -num1
        sign = -sign
    }
    if (num2 < 0) {
        num2 = -num2
        sign = -sign
    }
    while (num1 >= num2) {
        num1-=num2
        result++
    }
    if (sign == -1) {
        return -result
    }
    return result
}

function modulo(num1,num2) {
    if (num2 === 0) {
        return NaN
    }
    if (num1===num2) {
        return 0
    } else if (num1< num2) {
        return num1
    }
    while (num1 >= num2) {
        num1-=num2
    }
    return num1
}

console.log(122%0);
console.log(modulo(22,50));
console.log(modulo(500,50));
console.log(modulo(22,0));
console.log(modulo(-122,-2));
