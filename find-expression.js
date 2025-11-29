const add4 = ' +4'
const mul2 = ' *2'
function findExpression(num) {
    res =recursion(num,'1')
    return res
}

function recursion(num,str) {
    if (num===1) {
        return str
    }
    if (num<1) {
        return undefined
    }
    let res = undefined
    res = recursion(num-4,str)
    if (res != undefined) {
        return res + ' ' + add4
    } 
    res = recursion(num/2,str)
    if (res != undefined) {
        //console.log("-----",res);
        return res + ' ' + mul2
    }
}

// 1 +4
// console.log((findExpression(16)))
// 1 *2 *2 +4
// console.log((findExpression(8)))
