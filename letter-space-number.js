function letterSpaceNumber(str) {
    return str.match(/[a-z] \d/i)
}


console.log(letterSpaceNumber('example 1, example 20'));
