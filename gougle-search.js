function queryServers(serverName,q) {
    q = new URLSearchParams(q).toString()
    let url1 = `/${serverName}?q=${q}`
    let url2 = `/${serverName}_backup?q=${q}`
    return Promise.race([getJSON(url1.slice(0,-1)),getJSON(url2.slice(0,-1))])
}