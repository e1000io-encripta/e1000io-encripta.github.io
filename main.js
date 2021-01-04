

function mostrarNumber(id, text) {
    num = toNumber(text)
    mostrarResultado(id, num)

}

function toNumber(text) {
    // TODO transformar text a number
    let num = ''
    for(c in text){
        num += text.charCodeAt(c)
    }
    return num
}

function mostrarEncriptado(id, text) {
    enc = encriptar(toNumber(text))
    mostrarResultado(id, enc)

}

function encriptar(text) {
    // TODO encriptar text
    let num = text.split("").reverse().join("")
    return num
}

function mostrarResultado(id, value){
    const el = document.getElementById(id)
    el.classList = 'visible center content'
    el.innerText = value
}

 
function espera(id, value){
    setTimeout(() => {
        mostrarResultado(id, value)
    }, 1000);
}