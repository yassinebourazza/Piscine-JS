
async function isWinner(country) {    
    try {        
        let data = await db.getWinner(country).catch(()=>null)
        if (!data) throw `${country} never was a winner`
        if (data.continent!= 'Europe') throw `${country} is not what we are looking for because of the continent`
        data = await db.getResults(data.id).catch(()=>null)
        if (data.length <3) throw `${country} is not what we are looking for because of the number of times it was champion`
        let results = data.map((obj)=> obj.score)
        let years = data.map((obj)=> obj.year)
        throw `${country} won the FIFA World Cup in ${years.join(', ')} winning by ${results.join(', ')}`
    } catch (error) {
        return error
    }
}

// console.log(isWinner('Morocco').then(console.log))
// console.log(isWinner('Brazil').then(console.log))
// console.log(isWinner('France').then(console.log))
// console.log(isWinner('Italy').then(console.log))