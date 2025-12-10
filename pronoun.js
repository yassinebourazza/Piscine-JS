function pronoun(str) {
    let res = {}
    let pron = ['i','you','he','she','it','they','we']
        str = str.toLowerCase()
        str = str.split(/(\n| |,)/)
        
        for (let word=0; word < str.length;word++) {
            if(res[str[word]] == undefined && pron.includes(str[word])) {
                res[str[word]] = {word:[],count:1}
                if (!pron.includes(str[word+1])) {
                     res[str[word]].word.push(str[word+1])
                }
            } else if (res[str[word]] && !pron.includes(str[word+1])) {
                res[str[word]].word.push(str[word+1])
                res[str[word]].count++
            } else if (res[str[word]]) {
                res[str[word]].count++
            }
        }
        return res
}

// const ex = 'Using Array Destructuring, you wr you you can iterate through objects easily.'
// console.log(pronoun(ex));
// console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go')

 
//   i: { word: ['buy', 'to'], count: 2 },
//   you: { word: ['buy', 'go'], count: 2 },
//   it: { word: ['have', 'buys', 'is'], count: 3 },
  
