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
