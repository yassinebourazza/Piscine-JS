function triangle(str,num) {
    let result=''
    for (let i = 1; i <= num;i++ ) {
            result +=  str.repeat(i) + '\n'
    }
    return result.slice(0,-1)
}
