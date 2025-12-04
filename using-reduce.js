function adder(arr,defu=0) {
    return arr.reduce((total,current)=>total+current,defu)
}
function sumOrMul(arr,defu=0) {
    return arr.reduce((total,current)=> {
        if (current%2 ==0) {
            return total * current
        } else {
            return total + current
        }
    },defu)
}

function funcExec(arr,defu=0) {
    return arr.reduce((total,func) => func(total),defu)
}
console.log(adder([1, 2, 3, 4]), 10);
