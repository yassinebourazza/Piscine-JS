function letterSpaceNumber(str) {
    return (str.match(/[a-z]\s\d(?!\w)/ig) || [])
}


//  console.log(letterSpaceNumber('example 1, example 20'));
// console.log(letterSpaceNumber('I like 7up.'));
// console.log('21 31 41 1a 12'.match(/(?<!\d)1/g)); 
// console.log('21 31 41 1a 12'.match(/1(?=\d)/g)); 
