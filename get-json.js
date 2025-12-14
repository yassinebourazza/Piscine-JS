async function getJSON(path,params={}) {
    let url = path 
    if (typeof params == 'string') {
        url += '?' + params
    }    
    if (typeof params == 'object' && !Array.isArray(params)) {
        url += '?'
        let keys = Object.keys(params)
        for (let key of keys) {
            url += key + '=' + params[key] +'&'
        }
        url = url.slice(0,-1)
    }

    const result = await fetch(url)
    if (result.ok) {
        throw Error(result.status)
    }
    if (result.data) return result.data
    else if (result.error) throw Error(result.error)
}


console.log(getJSON('http:www.facebook.com/test','hello=test'))
console.log(getJSON('http:www.facebook.com/test',{hey:'heel',seter:5}))
