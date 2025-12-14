function interpolation({step,start,end,callback,duration}) {
    let timer = duration / step
    let point =(end-start)/ step
    for (let i =1; i <= step;i++) {
        setTimeout(()=>{
            callback([start + point*(i-1),timer*i])            
        },timer*i)
    }
}

interpolation({steps:5,start:0,end:1, callback: (x) => console.log(x) ,duration:1000})
// interpolation({ step: 5, start: 0, end: 4, callback: (x) => console.log(x), duration: 50 })