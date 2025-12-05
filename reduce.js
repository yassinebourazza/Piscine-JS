function fold(arr,func,acc) {
    
    for (let i=0 ;i< arr.length;i++) {
        acc = func(acc,arr[i],i,arr)
    }

    return acc
}
// const adder = (x,y) => x + y


// console.log(fold([1,2,3,4], adder,5));
