function split(str,spliter) {
    let startFlag =0
    let result = []
    let spliterLength = spliter.length
    
    for (let i = 0; i<= str.length-spliterLength;i++) {
        if (spliter=="") {
            if (i < str.length) {
                result.push(str[i])
            }
            continue
        }
        if (str.slice(i,i+spliterLength)==spliter) {        
                result = [...noLeak(result,str,startFlag,i)]
                startFlag = i+spliterLength
                i += spliterLength-1 
        } 
    }
    if (spliter!="") {
        result.push(str.slice(startFlag))
    }

    return  result
}

function noLeak(result=[],str,startFlag,i) {
     result.push(str.slice(startFlag,i))     
     return result
}

function join(arr,joiner=',') {
    let str = ""
    for (let key of arr) {
        str += key + joiner
    }
    return str.slice(0,-joiner.length)
}
