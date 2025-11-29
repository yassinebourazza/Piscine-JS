function pyramid(str,num) {
    let result=''
    for (let i = 1; i <= num;i++ ) {
        if (i ==num) {
            result +=  str.repeat(2*i-1) 
        } else {
            result += ' '.repeat((num-i)*str.length) + str.repeat(2*i-1)  + '\n'

        }
    }
    return result
}

console.log(pyramid('*',5))