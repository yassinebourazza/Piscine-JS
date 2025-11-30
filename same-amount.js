function sameAmount(str,reg1,reg2) {
    let numReg1 = str.match(reg1)
    let numReg2 = str.match(reg2)    
    if (numReg1 ==null && numReg2 ==null) {
        return true
    }
    if (numReg1 ==null || numReg2 ==null) {
        return false
    }
     
    if (numReg1.length == numReg2.length) {
        return true
    }
    return false
}
