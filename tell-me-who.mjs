import { readdir,readFile } from 'fs/promises'
let dir = process.argv[2] || process.cwd()

try {
    let files = await readdir(dir)
    let index = 1
    for (let file of files) {
        let name = file.slice(0,file.length-5).split('_')
        console.log(`${index}. ${name[1]} ${name[0]}`);
        index++
        
    }
} catch (error) {
    console.log(`Error ${error.message}`);
}