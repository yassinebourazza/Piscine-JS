// const add4 = ' +4'
// const mul2 = ' *2'

function findExpression(num,str='1') {
    if (num===1) {
        return str
    }
    if (num<1) {
        return undefined
    }
    let res = undefined
    res = findExpression(num-4,str+add4)
    if (!res) {
        res = findExpression(num/2,str+mul2)
    } 
    return res
}

// 1 +4
// console.log((findExpression(16)))
// 1 *2 *2 +4
// console.log((findExpression(8)))
