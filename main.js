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
    let mensagem = document.getElementById('mensagem')
    let divCerta = document.getElementById('palavra')
    if(palavra === divCerta.innerText){
        mensagem.innerHTML = `<h2>Você ganhou!</h2>`
    }

    if(letrasErradas.length === 6){
        mensagem.innerHTML = `<h2>Você perdeu!</h2>`
    }
}