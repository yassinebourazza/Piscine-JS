var vowels = /(a|e|u|i|o)/ig
function vowelDots(str) {
    return str.replace(vowels,'$1.')
}

//console.log(vowels.test('a'));


