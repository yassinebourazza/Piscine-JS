function mult2(num1) {
    return function(num2) {
        return num1 * num2
    }
}

function add3(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3
        }
    }
}

function sub4(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return num1 -num2 -num3- num4
            }
        }
    }
}

// console.log(mult2(2)(4));
// console.log(add3(2)(4)(4));
// console.log(sub4(10)(4)(2)(1));
