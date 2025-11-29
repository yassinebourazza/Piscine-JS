function split(str,spliter) {
    let startFlag =0
    let result = []
    let spliterLength = spliter.length
    
    for (let i = 0; i<= str.length-spliterLength;i++) {
        if (str.slice(i,i+spliterLength)==spliter) {        
                result = [...noLeak(result,str,startFlag,i)]
                startFlag = i+spliterLength
                i += spliterLength-1 
        } 
    }
    result.push(str.slice(startFlag))

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

console.log(join(["HTHTR",1651,65,1684,53,486,34,68,468,43,58168,4186,516,4,51,8684,163,8185,1861,684],'++'));
console.log(split("HTHTR,1651,65,1684,53,486,534,68,468,43,58168,4186,516,4,51,8684,,163,8185,1861,684,",',4'));


