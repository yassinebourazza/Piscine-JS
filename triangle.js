function triangle(str,num) {
    let result=''
    for (let i = 1; i <= num;i++ ) {
        if (i ==num) {
            result +=  str.repeat(i)
        } else {
            result +=  str.repeat(i) + '\n'

        }
    }
    return result
}
