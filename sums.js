function sums(num) {
    const arr = Array.from({length :num}, () => 1)
    let result = rec(arr,num)
    return result
}

function rec(arr,num,compare=2,result = [arr.slice()]) {
    let saveArr= arr.slice()
        for (let i=0 ;i< arr.length;i++) {
        if (arr[i]!=compare && i != arr.length-1) {
            
            arr[i] = compare
            for (let j=1; j <compare;j++) {           
                arr.pop()
            }
            result.push(arr.slice())
        }
    }
    
    if (compare+1<num){
        rec(saveArr,num,++compare,result)
    }
    return result
}
console.log(sums(4));
