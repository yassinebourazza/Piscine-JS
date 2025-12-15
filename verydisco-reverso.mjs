import { readFile } from "fs/promises";
let path = process.argv[2]

read(path)

async function read(path) {
    let content = await readFile(path, 'utf8')
    let words = content.split(' ')
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
console.log(result);

}
