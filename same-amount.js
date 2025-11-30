function sameAmount(str,reg1,reg2) {
    reg1 = new RegExp(reg1, 'g')
    reg2 = new RegExp(reg2, 'g')
    let numReg1 = str.match(reg1)
    let numReg2 = str.match(reg2)
    
  
    if (numReg1 ==null || numReg2 ==null) {
        return false
    }
    return numReg1.length == numReg2.length
}


