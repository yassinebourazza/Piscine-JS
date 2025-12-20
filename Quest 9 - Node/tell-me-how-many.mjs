import { readdir } from 'fs/promises'
let dir = process.argv[2] || process.cwd()

try {
    let files = await readdir(dir)
    console.log(files.length);
} catch (error) {
    console.log(`Error ${error.message}`);
}