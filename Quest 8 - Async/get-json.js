async function getJSON(path,params={}) {
    let url = path + '?' + new URLSearchParams(params).toString()
    const result = await fetch(url)
    if (!result.ok) {
        throw Error(result.statusText)
    }
    let res = await result.json()
    if (res.data) return res.data
    else if (res.error) throw Error(res.error)
}



console.log(getJSON('http:www.facebook.com/test','hello=test'))
console.log(getJSON('http:www.facebook.com/test',{hey:'heel',seter:5}))
