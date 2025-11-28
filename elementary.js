function multiply(num1,num2) {
    let result = 0
    for (let i=0 ; i<num1 ;i++) {
        result += num2
    }
    return result
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

