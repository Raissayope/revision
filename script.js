//criar variavel

//let nome = "Raissa Yope"
let idade = 18
let idadeIrmao = "18"
const anoNascimento = 2005

// desisão

if (idade === idadeIrmao){
    alert("igual...")

}else{
    alert("cada um no sou quadrado!")
}

// lendo informações no HTML

const titulo = document.getElementById("titulo")
const nome = document.getElementById("nome")

const email = document.getElementById("email")
const resultado = document.getElementById("resultado")

titulo.textContent = "mudei o titulo!! EU posso..."

titulo.style.color = "violet"

function mostrarResultado() {

    
    resultado.textContent = nome.value + " " + email.value

}