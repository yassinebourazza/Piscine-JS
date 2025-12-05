function fold(arr,func,acc) {
    
    for (let i=0 ;i< arr.length;i++) {
        acc = func(acc,arr[i],i,arr)
    }

    return acc
}

function foldRight(arr,func,acc) {
    
    for (let i= arr.length-1 ;i>= 0;i--) {
        acc = func(acc,arr[i],i,arr)
    }

    return acc
}

function reduce(arr,func,acc=0) {
    let start = 0
    if (acc==0) {
        acc= arr[0]
        start++
    }
    
    if (arr.length < 1) {
        return "error"
    }
    for (let i= start ;i< arr.length;i++) {
        acc = func(acc,arr[i],i,arr)
    }
    return acc
}
function reduceRight(arr,func,acc=0) {
    let start = 0
    if (acc==0) {
        acc= arr[0]
        start++
    }
    
    if (arr.length < 1) {
        return "error"
    }
    
    if (typeof arr == 'string') {
        return arr
    }
    
    for (let i= arr.length-1 ;i>=start;i--) {
        acc = func(acc,arr[i],i,arr)
    }
    return acc
}
   const adder = (x,y) => x + y


   console.log(reduceRight('examplesimple a is This ', adder));
