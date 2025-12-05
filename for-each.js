function forEach(arr,func) {
    for (let i = 0 ; i < arr.length; i++) {
        arr[i] = func(arr[i],i,arr)
    }
}
// code idea the function (foreach,map,reduce,filter,every,some) accepted 3 arguments => currentValue, index , array
// const result = []
// console.log(forEach([1,2,3,4,5,6], value => result.push(value)));
