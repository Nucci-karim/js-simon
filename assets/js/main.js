function randomNumF(){
    return Math.floor( Math.random() * 100) + 1
}

const numeriRandom = document.querySelector('#numeri-random')
let arrayNumbers = []


while(arrayNumbers.length < 5){
    let random = randomNumF()

    if(!arrayNumbers.includes(randomNumF)){
        arrayNumbers.push(random)
    }
}
console.log(arrayNumbers)

// stampa 

for(let i = 0; i < arrayNumbers.length; i++){
    numeriRandom.innerHTML += `<li>${arrayNumbers[i]}</li>`
}

// cancellare i numeri 
setTimeout(function() {
    numeriRandom.innerHTML = ``
}, 2000)

// creazione promt dopo la scomparsa 
setTimeout(function() {
    
    let numeriUser = []

    while(numeriUser.length < 5){
        let numeroScritto = parseInt(prompt("scrivi il numero"))

        if(!numeriUser.includes(numeroScritto)){
            numeriUser.push(numeroScritto)
        }
    }

    // assicurarsi che siano gli stessi numeri 
    let indovinati = []

    for(let k = 0; k < numeriUser.length; k++){
        if(arrayNumbers.includes(numeriUser[k])){
            indovinati.push(numeriUser[k])
        }
    }

    console.log(indovinati)
    // stampa risultato 
    document.querySelector('#risultato').innerHTML = `hai indovinato ${indovinati.length}/5 e sono ${indovinati}`


}, 4000)

// let timer = setInterval( function(){
//     numeriRandom.innerHTML += `<li>${randomNumF}</li>`
// }, 1000)


// // blocco del timer
// setTimeout(function(){
//     clearInterval(timer)
// }, 5000) //tot secondi