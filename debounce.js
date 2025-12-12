function debounce(func,timer) {
    let deb
    return function(...args) {
        clearTimeout(deb)
        
        deb = setTimeout(() => {
            func(...args)
        }, timer);
        return 
    }   
}
// console.log(deb);/*Timeout {
//                   _idleTimeout: 100,
//                   _idlePrev: [TimersList],
//                   _idleNext: [TimersList],
//                   _idleStart: 15,
//                   _onTimeout: [Function (anonymous)],
//                   _timerArgs: undefined,
//                   _repeat: null,
//                   _destroyed: false,
//                   [Symbol(refed)]: true,
//                   [Symbol(kHasPrimitive)]: false,
//                   [Symbol(asyncId)]: 8,00
//                   [Symbol(triggerId)]: 1*/

// const lo = debounce((msg) => console.log(msg), 500, true);

// lo("A");
// lo("B"); 
// lo("C");

function opDebounce(func, timer, leading = false) {
    let id
    let flag = false;
    return function (...args) {
        const eventNow = leading && !flag;
        clearTimeout(id)
        if (eventNow) {
            flag = true
            func(...args)
        }
        id = setTimeout(() => {
            flag = false
        }, timer)
    };
}

// const log = opDebounce((msg) => console.log(msg), 500,true);

// log("A");
// log("B"); 
// log("C");

// function makeCounter() {
//     let count = 0
//     return function() {
//         count++
//         return count
//     }
// }

// const c = makeCounter()
// console.log(c()) 
// console.log(c()) 
// console.log(c()) 
