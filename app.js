let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';


function exibirMensagem() {
    console.log("foi clicado");
}

function alertButton() {
    alert("Eu amo JS");
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Me diga o nome de uma cidade do Brasil que você gosta muito:');
    alert (`Estive em ${nomeDaCidade} e lembrei de você.`)
}

function somando() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}
