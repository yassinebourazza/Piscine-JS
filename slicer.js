function slice(strOrArr, start,end) {
    if (start <0 || start > strOrArr.length) {
        return ""
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


console.log(slice([2,4,8,7,6],2,4));
console.log(slice("helloworld",2,4));
