function multiply(num1,num2) {
    let result = 0
    let sign = 1
    if (num2 === 0) {
        return Infinity
    } 
    if (num2 < 0) {
        num2 = -num2
        sign = -1
    }
    for (let i=0 ; i<num2 ;i++) {
        result += num1
    }
    return result *sign
}

function divide(num1,num2) {
    let result = 0
    while (num1 >= num2) {
        num1-=num2
        result++
    }
    return result
}

function modulo(num1,num2) {
    while (num1 >= num2) {
        num1-=num2
    }
    return num1
}

//() => multiply(-22, 123) === -2706

console.log(multiply(-22,-50));
