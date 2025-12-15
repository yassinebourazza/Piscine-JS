function queryServers(serverName,q) {
    let url1 = `/${serverName}?q=${q}`
    let url2 = `/${serverName}_backup?q=${q}`
    return promise.race([getJSON(url1),getJSON(url2)])
}