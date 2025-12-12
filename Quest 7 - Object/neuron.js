function neuron(arr) {
    for (let str=0 ; str<arr.length; str++) {
        arr[str] = arr[str].split(':')
            arr[str][1] = arr[str][1].slice(0,-11)
    }
    let result= {}
    for (let str of arr) {
        // console.log(str);
        str[0] = str[0].toLowerCase()
        str[1] = str[1].trim()
        str[str.length-1] = str[str.length-1].trim()
        if (result[str[0]]==undefined) {
            result[str[0]] = {}
        } 
        if (result[str[0]][str[1].toLowerCase().replaceAll(' ','_').replaceAll(/[\W]/g,'')]== undefined) {
              let keys = Object.keys(result)
            result[str[0]][str[1].toLowerCase().replaceAll(' ','_').replaceAll(/[\W]/g,'')] = {}
            result[str[0]][str[1].toLowerCase().replaceAll(' ','_').replaceAll(/[\W]/g,'')][keys[keys.length-1].slice(0,-1)] = str[1]
            result[str[0]][str[1].toLowerCase().replaceAll(' ','_').replaceAll(/[\W]/g,'')].responses = []
        }
        result[str[0]][str[1].toLowerCase().replaceAll(' ','_').replaceAll(/[\W]/g,'')].responses.push(str[str.length-1])
        
    }
    return result
}