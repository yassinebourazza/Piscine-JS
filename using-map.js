function citiesOnly(arr) {
    return arr.map((obj) => obj.city)
}

function upperCasingStates(arr) {
    return arr.map((str)=> str.slice(0,1).toUpperCase() + str.slice(1))
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

// console.log(tempForecasts([
//   {
//     city: 'Pasadena',
//     temperature: ' 101 °F',
//     state: 'california',
//     region: 'West',
//   },
// ]));
