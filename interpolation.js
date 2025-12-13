function interpolation({steps,start,end,callback,duration}) {
    let timer = duration / steps
    let point =(end-start)/ steps
    for (let i =1; i <= steps;i++) {
        setTimeout(()=>{
            callback([point,timer*i])            
        },timer*i)
    }
}

interpolation({steps:5,start:0,end:1, callback: (x) => console.log(x) ,duration:1000})
// interpolation({ step: 5, start: 0, end: 4, callback: (x) => console.log(x), duration: 50 })