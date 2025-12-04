function adder(arr) {
    return arr.reduce((total,current)=>total+current)
}
function sumOrMul(arr) {
    return arr.reduce((total,current)=> {
        if (current%2 ==0) {
            return total * current
        } else {
            return total + current
        }
    })
}

function funcExec() {
    return arr.reduce((total,func) => func(total))
}