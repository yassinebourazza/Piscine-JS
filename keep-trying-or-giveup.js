function retry(count=3,callback = async ()=>{}) {
    return async function(...args) {
        try {
            let result = await callback(...args)
            return result
        } catch {
            if (count > 0) retry(count-1,callback)(...args)
        }
    }
}

console.log(await retry(3, async (x)=>x )(1));
