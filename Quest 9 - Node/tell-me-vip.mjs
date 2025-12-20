import { readdir,readFile,writeFile } from 'fs/promises'
let dir = process.argv[2] || process.cwd()
tellMeVip(dir)
async function tellMeVip(dir) {
    try {
        let arr = []
        let files = await readdir(dir)
        for (let file of files) {
            if (!file.endsWith('.json')) continue
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
        let list = ''
        for (let i = 0 ;i < arr.length;i++) {
            list += 1+i +'. ' + arr[i] +'\n'
        }
        writeFile('vip.txt',list.slice(0,-1))

        
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
}

