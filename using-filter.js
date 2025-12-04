function filterShortStateName(arr) {
    return arr.filter((str)=> str.length<7)
}

function filterStartVowel(arr) {
    return arr.filter((str)=> 'aeuioAEUIO'.includes(str[0]))
}

function filter5Vowels(arr) {
    return arr.filter((str) => {
        let count = 0
        for (let rune of str) {
            if ('aeuio'.includes(rune)) {
                count++
            }
        }
        if (count < 5) {
            return false
        }
        return true
    })
}

function filter1DistinctVowel(arr) {
    return arr.filter((str)=>{
        let distinct
        for (let rune of str) {            
            if (!distinct && rune.test(/(a|e|u|i|o)/i)) {
                distinct = rune
            }
            if (distinct && rune.test(/(a|e|u|i|o)/i) && rune != distinct) {
                return false
            }
        }
        return true
    })
}

function multiFilter(arr) {
    return arr.filter((obj) => {
        
        if (obj.capital.length < 8) return false
        
        if ('aeuioAEUIO'.includes(obj.name[0])) return false
        let flag = false
        for (let rune of obj.tag) {
            if ('aeuioAEUIO'.includes(rune)) {
                flag = true
                break
            }
        }
        if (flag) return false
        if (obj.region.includes("South")) return false
        return true
    })
}

console.log(multiFilter([{
    capital: '123456789',
    name: 'Anas',
    tag: 'aba',
    region: 'north'
}]));
console.log(filter1DistinctVowel(['Alabama',
   'Alaska',
   'Arkansas',
    'Kansas',
    'Maryland',
    'Mississippi',
    'New Jersey',
    'Tennessee']));

