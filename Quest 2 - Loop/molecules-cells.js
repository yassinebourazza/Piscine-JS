function RNA(str) {
    let result = ""
    for (let r of str) {
        if (r == 'G') {
            result+= "C"
        } else if (r=='C') {
            result+='G'
        }else if (r=='T') {
            result+='A'
        }else if (r=='A') {
            result+='U'
        }
    }
    return result
}

function DNA(str) {
    let result = ""
    for (let r of str) {
        if (r == 'C') {
            result+= "G"
        } else if (r=='G') {
            result+='C'
        }else if (r=='A') {
            result+='T'
        }else if (r=='U') {
            result+='A'
        }
    }
    return result
}
