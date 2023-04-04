function randomNumF(){
    return Math.floor( Math.random() * 100) - 1
}

const numeriRandom = document.querySelector('#numeri-random')

let timer = setInterval( function(){
    numeriRandom.innerHTML += `<li>${randomNumF}</li>`
}, 1000)


// blocco del timer
setTimeout(function(){
    clearInterval(timer)
}, 5000) //tot secondi