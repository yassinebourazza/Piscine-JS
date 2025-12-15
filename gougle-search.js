function queryServers(serverName,q) {
    q = new URLSearchParams(q).toString()
    let url1 = `/${serverName}?q=${q}`
    let url2 = `/${serverName}_backup?q=${q}`
    return Promise.race([getJSON(url1),getJSON(url2)])
}