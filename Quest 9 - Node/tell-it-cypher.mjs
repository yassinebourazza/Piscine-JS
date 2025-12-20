import { readFile,writeFile } from "node:fs/promises"

let file = process.argv[2]
let method = process.argv[3]
let filename = process.argv[4]

let data = await readFile(file,'utf8')
let res = ''
if (method == 'encode') {
    res = Buffer.from(data,'utf8').toString('base64')
    console.log(filename);
    
    if (!filename) {
        writeFile('cypher.txt',res)
    } else {
        writeFile(filename,res)
    }

} else if (method == 'decode') {
    res = Buffer.from(data,'base64').toString('utf8')

     if (!filename) {
    writeFile('clear.txt',res)
        
    } else {
        writeFile(filename,res)
    }
}
console.log(res);






