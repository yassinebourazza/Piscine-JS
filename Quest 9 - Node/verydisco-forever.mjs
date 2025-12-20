import {writeFile} from 'fs/promises'

let words = (process.argv[2]).split(' ')
let result = ''
for (let word of words) {
    if (word.length == 1) {
        result += word + ' '
    } else if (word.length % 2 ==0) {
        result += word.slice(-word.length/2) + word.slice(0,word.length/2)+ ' '
    } else {
        result += word.slice(-word.length/2) + word.slice(0,(word.length+1)/2)+ ' '
    }
}
result = result.slice(0,-1)
await writeFile('verydisco-forever.txt', result)