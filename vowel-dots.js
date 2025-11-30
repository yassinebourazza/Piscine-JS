var vowels = /(a|e|u|i|o)/ig
function vowelDots(str) {
    return str.replace(vowels,'$&.')
}

//console.log(vowels.test('a'));

console.log(vowelDots('Algorithm'));
