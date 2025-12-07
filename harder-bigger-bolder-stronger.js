var alphabet = ['A','Z','E','R','T','Y','U','I','O','P','M','L','K','J','H','G','F','D','S','Q','W','X','C','V','B','N']
export function generateLetters() {
    let num = 0
    for (let num = 1 ; num <=120;num++) {
        let div = document.createElement('div')
        div.textContent= alphabet[Math.floor(Math.random()*26)]       
        div.style.fontSize = 10 + num + 'px'
        if (num <= 40) {
            div.style.fontWeight = 300
        }else if (num <= 80) {
            div.style.fontWeight = 400
        } else {
            div.style.fontWeight = 600
        }
        document.body.append(div)
    }
}