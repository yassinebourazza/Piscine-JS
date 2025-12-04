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
        // console.log(str);
        
        for (let rune of str) {            
            
            if (distinct && 'aeuioAEUIO'.includes(rune)) {
                // console.log(str,'--', rune,'---', distinct);
                
                if (rune != distinct.toUpperCase() && rune != distinct.toLowerCase()) return false
            } else if ('aeuioAEUIO'.includes(rune)) {
                distinct = rune
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
        if (!flag) return false
         if (obj.region.includes("South")) return false
        return true
    })
}

// console.log(filter1DistinctVowel(['Alaubama',
//    'Alaska',
//    'Arkansas',
//     'Kansas',
//     'Maryland',
//     'Mississippi',
//     'New Jersey',
//     'Tennessee']));
console.log(multiFilter([
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    {
      tag: 'MO',
      name: 'Missouri',
      capital: 'Jefferson City',
      region: 'Midwest',
    },
    {
      tag: 'PA',
      name: 'Pennsylvania',
      capital: 'Harrisburg',
      region: 'Northeast',
    },
    {
      tag: 'RI',
      name: 'Rhode Island',
      capital: 'Providence',
      region: 'Northeast',
    },
  ]));
