const getURL = (url) => url.match(/(https?):\/\/[\S]+/g)
const greedyQuery = (url) =>  url.match(/https?:\/\/[\S]+\/[\S]+((\?|&)[\S]+=[\S]+){3}/g)
const notSoGreedy = (url) =>  url.match(/https?:\/\/[\S]+\?(&?[^=&\s]+=[^=&\s]+){2,3}(?=\s)/g)
