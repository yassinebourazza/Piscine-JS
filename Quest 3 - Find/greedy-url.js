// -   'http://example.com/hello?you=something&something=you',
// -   'http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy',
// -   'http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact',
// -   'https://192.168.1.123?something=nothing&pro=[23]'


const getURL = (url) => url.match(/(https?):\/\/[\S]+/g)
const greedyQuery = (url) =>  url.match(/https?:\/\/[\S]+\/[\S]+((\?|&)[\S]+=[\S]+){3}/g)
const notSoGreedy = (url) =>  url.match(/https?:\/\/[\S]+\?(&?[^=&\s]+=[^=&\s]+){2,3}(?=\s)/g)


//   'http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact',
//   'http://localhost/exercises',
//   'https://192.168.1.123?something=nothing&pro=[23]',
//   'https://www.notherExample.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot&id=3&qwe=ty',
//   'http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot',


// console.log(greedyQuery(dataSet));
// console.log(notSoGreedy(dataSet));

