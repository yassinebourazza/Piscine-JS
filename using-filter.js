function filterShortStateName(arr) {
    return arr.filter((str)=> str.length<7)
}

function filterStartVowel(arr) {
    return arr.filter((str)=> 'aeuio'.includes(str[0]))
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
            console.log(rune + '-' + distinct);
            
            if (!distinct && 'aeuio'.includes(rune)) {
                distinct = rune
            }
            if (distinct &&'aeuio'.includes(rune) && rune != distinct) {
                return false
            }
        }
        return true
    })
}

function multiFilter(arr) {
    return arr.filter((obj) => {
        
        if (obj.capital.length < 8) return false
        if ('aeuio'.includes(obj.name[0])) return false
        let flag = false
        for (let rune of obj.tag) {
            if ('aeuio'.includes(rune)) {
                flag = true
                break
            }
        }
        if (!flag) return false
        if (obj.region.includes("South")) return false
        return true
    })
}

// console.log(multiFilter([{
//     capital: '123456789',
//     name: 'nas',
//     tag: 'aba',
//     region: 'north'
// }]));

