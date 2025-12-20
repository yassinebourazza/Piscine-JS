function pyramid(str,num) {
    let result=''
    for (let i = 1; i <= num;i++ ) {
            result += ' '.repeat((num-i)*str.length) + str.repeat(2*i-1)  + '\n'
    }
    return result.slice(0,-1)
}
