let palavras = [
    'gato', 'cachorro', 'andorinha', 'pombo','capivara', 'pantera', 'hipopotamo', 'girafa', 'jacare', 'rinoceronte',
    'vaca', 'ornitorrinco'
]

let palavra = palavras[Math.floor(Math.random() * palavras.length)]

let letrasAcertadas = [], letrasErradas = []

atualizaTela()


document.addEventListener('keydown', (e)=>{
    let letra = e.key
    if(eUmaLetra(letra)){
        if(letrasErradas.includes(letra) || letrasAcertadas.includes(letra)){
            alert("letra já repetida")
        }else{
            palavra.includes(letra) ? letrasAcertadas.push(letra) : letrasErradas.push(letra)
        }
    }
    atualizaTela()
})

function eUmaLetra(letra){
    const regex = /[a-zA-Z]/
    return regex.test(letra)
}

function atualizaTela(){
    mostrarLetrasErradas()
    mostrarLetrasCertas()
    checaJogo()
}

function mostrarLetrasErradas(){
    let divErradas = document.getElementById('erradas')

    divErradas.innerHTML = ''
    letrasErradas.forEach(letra =>{
            divErradas.innerHTML += letra
            document.getElementById('forca-img').src = `images/${letrasErradas.length}.svg`
    })
}

function mostrarLetrasCertas(){
    let divCerta = document.getElementById('palavra')
    divCerta.innerHTML = ''
    palavra.split('').forEach(letra =>{
        letrasAcertadas.includes(letra) ? divCerta.innerHTML += letra : divCerta.innerHTML += '_ '
    })
}

function checaJogo(){
    let mensagem = document.querySelector('.title-msg')
    let divCerta = document.getElementById('palavra')
    let modal = document.querySelector('.modal')
    if(palavra === divCerta.innerText){
        modal.style.display = 'flex'
        mensagem.innerText = `Você Ganhou! A palavra era: ${palavra}!`
    }

    if(letrasErradas.length === 6){
        modal.style.display = 'flex'
        mensagem.innerText = `Você perdeu! A palavra era ${palavra}!`
    }
}

function reiniciaJogo(){
    window.location.reload()
}