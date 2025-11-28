function slice(strOrArr, start=0,end=strOrArr.length) {
    if (start <0) {
        start = strOrArr.length+start
    }    
    if (end > strOrArr) {
        end = strOrArr.length
    }
    let str
    if (typeof strOrArr === 'string') {
        str = ""
        for (let index=start; index< end; index++) {
            str += strOrArr[index]
        }
    }  else if (Array.isArray(strOrArr)) {
        str = []
        for (let index=start; index< end; index++) {
            str.push(strOrArr[index])
        }
    }
    return str
}