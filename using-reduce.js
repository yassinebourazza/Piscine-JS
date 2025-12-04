function adder(arr,defu) {
    return arr.reduce((total,current)=>total+current,defu)
}
function sumOrMul(arr,defu) {
    return arr.reduce((total,current)=> {
        if (current%2 ==0) {
            return total * current
        } else {
            return total + current
        }
    },defu)
}

function funcExec() {
    return arr.reduce((total,func) => func(total),defu)
}
