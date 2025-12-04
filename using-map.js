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
    return arr.map((fah)=> Math.floor(((parseInt(fah))-32)* (5/9)) + '°C')
}
function trimTemp(arr) {
    return arr.map((obj)=> {
    let trim = obj.temperature.trim().split(' ')
    let result = ''
    for (let t of trim) {
        result += t
    }
    obj.temperature = result
    return obj
})
}

function tempForecasts(arr) {
    return arr.map((obj)=>{
        let temp = Math.floor((parseInt(obj.temperature)-32) * (5/9))
        return temp + "°Celsius in " + obj.city+ ', ' + upperCasingStates([obj.state]) + ''
    })
}
const temps = ['86°F', '100°F', '41°F', '55°F', '10°F', '70°F', '-2°F']


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
// console.log(trimTemp([
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]));
