var vowels = /(a|e|u|i|o)/g
function vowelDots(str) {
    return str.replace(vowels,'$&.')
}

//console.log(vowels.test('a'));
