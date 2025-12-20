function interpolation({step,start,end,callback,duration}) {
    let timer = duration / step
    let point =(end-start)/ step
    for (let i =1; i <= step;i++) {
        setTimeout(()=>{
            callback([start + point*(i-1),timer*i])            
        },timer*i)
    }
}