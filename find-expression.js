const add4 = '+4'
const mul2 = '*2'
function findExpression(num) {
    let str= '1'
    let compare = 1
    while(compare<num) {
        if (compare*2 < num) {
            str += " " + mul2
            compare*=2
        } else {
            str += " " + add4
            compare+=4
        }
    }
    if (compare!=num) {
        return undefined
    }
    return str
}


console.log((findExpression(14)))