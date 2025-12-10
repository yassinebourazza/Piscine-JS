function pronoun(str) {
    let res = {}
    let pron = ['i','you','he','she','it','they','we']
        str = str.split(' ')
        for (let word=0; word < str.length;word++) {
            console.log(word);
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
