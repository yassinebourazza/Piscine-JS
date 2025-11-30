// const url = `qqq
//         http:// 
//         qqqq 
//         q 
//         qqqqq 
//         https://something.com/hello 
//         qqqqqqq 
//         http://example.com/hello?you=something&something=you&hfsdh=hreh&rhtht=htr&rhtht=htr
//         http://example.com/hello?you=something&something=you&hfsdh=hreh&rhtht=htr&something=you&hfsdh=hreh&rhtht=htr
//         http://example.com/hello?you=something&something=you&hfsdh=hreh&rhtht=htr
//         http://example.com/hello?you=something&something=you&something=you
//         http://example.com/hello?you=something&something=you
//         http://example.com/hello?you=somethin`


const getURL = (url) => url.match(/(https?):\/\/\w+\.(com)\/\w+\?(&|\w|=)+/gm)
const greedyQuery = (url) => url.match(/(https?):\/\/\w+\.(com)\/\w+((\?|&)\w+=\w+){3}(&|\w|=)+/gm)
const notSoGreedy = (url) => url.match(/(https?):\/\/\w+\.(com)\/\w+((\?|&)\w+=\w+){2,3}[^&]$/gm)

// console.log(getURL(url));
// console.log(greedyQuery(url));
// console.log(notSoGreedy(url));
