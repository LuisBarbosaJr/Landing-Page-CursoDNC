var SetaDireita = window.document.getElementById("Seta-Direita")
var SetaEsquerda = window.document.getElementById("Seta-Esquerda")

var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")

function RolarParaDireita() {

    Bruna.style = "display: none"
    Samantha.style = "display: flex"

    SetaDireita.style = "display: none"
    SetaEsquerda.style = "display: flex; margin-top: 55%"
}

function RolarParaEsquerda() {

    Bruna.style = "display: flex"
    Samantha.style = "display: none"

    SetaDireita.style = "display: flex"
    SetaEsquerda.style = "display: none"
}