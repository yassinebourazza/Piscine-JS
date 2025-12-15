import { readdir,readFile } from 'fs/promises'
let dir = process.argv[2] || process.cwd()

try {
    let arr = []
    let files = await readdir(dir)
    for (let file of files) {
        let name = file.slice(0,file.length-5).split('_')
        let data = await readFile(dir+'/'+file)
        data = JSON.parse(data)
        if (data.answer == 'yes') {
            arr.push(`${name[1]} ${name[0]}`)
        }        
    }
    for (let i=0; i < arr.length; i++) {
        for (let j=0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let save = arr[j]
                arr[j] = arr[i]
                arr[i] = save
            }
     }
    }
    
    for (let i = 0 ;i < arr.length;i++) {
        console.log(1+i +'. ' + arr[i]);
        
    }
    
} catch (error) {
    console.log(`Error ${error.message}`);
}

