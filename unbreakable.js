function split(str) {
    let flag =0
    let result = []
    let start = false
    for (let i = 0; i< str.length;i++) {
        if (str[0]==' ') {
            start = true
        }
        if (i!=0 && str[i]!=' ' && str[i-1]==' ') {
            flag=i
        } else if (i!= str.length-1 && str[i]==' ' && str[i-1]!=' ') {
            result.push(str.slice(flag,i))
        }
    }
    if (str[str.length-1] !== " ") {
        result.push(str.slice(flag))
    }

    if (start) {
        return result.slice(1)
    }
    return result
}

console.log(split(' hello  world  from  js  '));
