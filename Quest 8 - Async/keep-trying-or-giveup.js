function retry(count=3,callback = async ()=>{}) {
    return async function(...args) {
        try {
            let result = await callback(...args)
            return result
        } catch (error) {
            if (count > 0) {
                return retry(count-1,callback)(...args)
            } else {
                throw error
            }  
        }
    }
}

function timeout(delay,callback) {
    return function(...args) {
        let res = callback(...args)
        let pro = new Promise((_,rej)=>{
            setTimeout(()=>{
                rej(Error('timeout'))
            },delay)
        })
        return Promise.race([res,pro])
    }
}