function sameAmount(str,reg1,reg2) {
    if (str.match(reg1) ==null || str.match(reg2) ==null) {
        return false
    }
    const numReg1 = [...str.match(reg1)].length
    const numReg2 = [...str.match(reg2)].length
    console.log(numReg1,numReg2);
    
    if (numReg1 ==null && numReg2 ==null) {
        return true
    }
    if (numReg1.length == numReg2.length) {
        return true
    }
    return false
}


