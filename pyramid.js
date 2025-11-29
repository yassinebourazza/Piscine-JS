function pyramid(str,num) {
    let result=''
    for (let i = 1; i <= num;i++ ) {
        if (i ==num) {
            result +=  str.repeat(i) + str.repeat(i-1)
        } else {
            result += ' '.repeat(num-i) + str.repeat(i) + str.repeat(i-1) + '\n'

        }
    }
    return result
}

console.log(pyramid('*',50))