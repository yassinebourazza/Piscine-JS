function debounce(func,timer) {
    let deb
    return function(...args) {
        clearTimeout(deb)        
        deb = setTimeout(() => { 
            func(...args)
        }, timer); 
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
                //   [Symbol(triggerId)]: 1*/

// const lo = debounce((msg) => console.log(msg), 500);

// lo("A");
// lo("B"); 
// lo("C");

function opDebounce(func, timer, leading = false) {
    let id
    let flag = true;
    return function (...args) {
        console.log('-----');
        
        const eventNow = leading && flag;
        clearTimeout(id)
        if (eventNow) {
            flag = false
            func(...args)
        } 
            id = setTimeout(() => {
                flag = true
                if (!leading) func(...args)
            }, timer)
        
        
    }
}

const log = opDebounce((msg) => console.log(msg), 500,false);

log("A");
log("B"); 
log("C");
setTimeout(()=> {
    log('D')
    
},1000) 

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

