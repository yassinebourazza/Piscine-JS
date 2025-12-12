function debounce(func,timer) {
    let deb
    return function(...args) {
        console.log(deb); //undefined in the first time
        clearTimeout(deb)
        
        deb = setTimeout(() => {
            func(...args)
        }, timer);
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
        //                   [Symbol(asyncId)]: 8,
        //                   [Symbol(triggerId)]: 1*/
        return deb._idleStart
    }   
}

const f = debounce((x)=> x+1, 100)
console.log(f(1,2,3));
console.log(f(1,2,3));
console.log(f(1,2,3));

// function opDebounce(func, timer) {
//     return function(...args) {

//     }
// }


