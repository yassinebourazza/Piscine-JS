function citiesOnly(arr) {
    return arr.map((obj) => obj.city)
}

function upperCasingStates(arr) {
    return arr.map((str)=> {
        let result = ''
        for(let i = 0; i< str.length;i++) {
            if (i==0 && str[i] != ' ') {
                result += str[i].toUpperCase()
            } else if (str[i] != ' ' && str[i-1] == ' ') {
                result += str[i].toUpperCase()
            } else {
                result += str[i]
            }
        }
        return result
    })
}

function fahrenheitToCelsius(arr) {
    return arr.map((fah)=> Math.round(((parseInt(fah))-32)* (5/9)) + '°C')
}
function trimTemp(arr) {
    return arr.map((obj)=> {
    obj.temperature = obj.temperature.trim()
    return obj
})
}

function tempForecasts(arr) {
    return arr.map((obj)=>{
        let temp = Math.round((parseInt(obj.temperature)-32) * (5/9))
        return temp + "°Celsius in " + obj.city+ ', ' + obj.state
    })
}
console.log(ctx.temps);

// console.log(upperCasingStates( [
//     'Alabama',
//     'New Jersey',
//     'Alaska',
//     'New York',
//     'California',
//     'New hampshire',
//     'Ohio',
//     'texas',
//     'west virginia',
//   ]));

// console.log(tempForecasts([
//   {
//     city: 'Pasadena',
//     temperature: ' 101 °F',
//     state: 'california',
//     region: 'West',
//   },
// ]));
