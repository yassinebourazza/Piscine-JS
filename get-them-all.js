export function getArchitects() {
    let architects = document.querySelectorAll('a')
    let notArchitects = document.querySelectorAll('span')
    let arrayArchitects = [...architects]
    // console.log(architects);
    
    let arrayNotArchitects = [...notArchitects]
    return [arrayArchitects,arrayNotArchitects]
}

export function getClassical() {
    let classical = document.querySelectorAll('a.classical')
    let notClassical = document.querySelectorAll('a:not(a.classical)')  
    let arrayClassical = [...classical]
    let arrayNotClassical = [...notClassical]
    return [arrayClassical,arrayNotClassical]
}

export function getActive() {
    let active = document.querySelectorAll('a.classical.active')
    let notActive = document.querySelectorAll('a.classical:not(a.classical.active)')
    // console.log(architects);
    // console.log(notArchitects);
    let arrayActive = [...active]
    let arrayNotActive = [...notActive]
    return [arrayActive,arrayNotActive]
}

export function getBonannoPisano() {
     let bonannoPisano = document.getElementById('BonannoPisano')
     let active = document.querySelectorAll('a.classical.active')
     let arrayActive = [...active]
     return [bonannoPisano,arrayActive]
}

