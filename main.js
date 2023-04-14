let palavras = ['gato', 'cachorro', 'andorinha', 'pombo', 'capivara', 'pantera', 'hipopotamo', 'girafa','jacare', 'rinoceronte', 'vaca', 'ornitorrinco', 'abelha', 'alpaca', 'avestruz', 'baleia', 'bode', 'camelo', 'castor', 'cavalo', 'coala', 'cobra', 'coelho', 'crocodilo', 'elefante', 'galinha', 'golfinho', 'gorila', 'guaxinim', 'iguana', 'jabuti', 'lagosta', 'leopardo', 'lobo', 'lontra', 'macaco', 'morcego', 'ovelha', 'panda', 'papagaio', 'pardal', 'pato', 'pinguim', 'porco', 'rato', 'sapo', 'tamandua', 'tartaruga', 'tatu', 'tigre', 'touro', 'tubarao', 'tucano', 'urso', 'urubu', 'zebra']

let palavra = palavras[Math.floor(Math.random() * palavras.length)]

let letrasAcertadas = [], letrasErradas = []

if(localStorage.getItem('Pontos') === null) localStorage.setItem('Pontos', 0)

let pontos = parseInt(localStorage.getItem('Pontos'))

let forcaIncompleta = true

atualizaTela()

document.addEventListener('keydown', (e) =>{ if(e.key === 'Enter' && forcaIncompleta) inicia() })

function inicia(){

    let letra = document.getElementById('input').value

    letra = letra.toLowerCase()

    if(eUmaLetra(letra)){
        if(letrasErradas.includes(letra) || letrasAcertadas.includes(letra)){
            alert("letra já repetida")
        }else{
            palavra.includes(letra) ? letrasAcertadas.push(letra) : letrasErradas.push(letra)
        }
    }

    atualizaTela()

}

function eUmaLetra(input){
    const regex = /[a-zA-Z]/
    return regex.test(input)
}

function atualizaTela(){
    document.getElementById('pontos').innerText = localStorage.getItem("Pontos")
    document.getElementById('input').value = ''
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
    let input = document.getElementById('input')
    let btn = document.getElementById('btn-enviar')
    if(palavra === divCerta.innerText){
        input.disabled = true
        btn.disabled = true
        forcaIncompleta = false
        modal.style.display = 'flex'
        mensagem.innerText = `Você Ganhou! A palavra era: ${palavra}!`
        salvaPontos(pontos += 1)
    }

    if(letrasErradas.length === 6){
        input.disabled = true
        btn.disabled = true
        forcaIncompleta = false
        modal.style.display = 'flex'
        mensagem.innerText = `Você perdeu! A palavra era ${palavra}!`
        if(pontos > 0) salvaPontos(pontos -= 1)
    }
}

function reiniciaJogo(){
    window.location.reload()
}

function salvaPontos(pontos){
    parseInt(localStorage.setItem('Pontos', pontos))
}

function zerar(){
    localStorage.setItem('Pontos', 0)
    reiniciaJogo()
}