//Altere o conteúdo da tag h1 com document.querySelector 
// e atribua o seguinte texto: Hora do Desafio.

let conteudo = document.querySelector("h1");
conteudo.innerHTML = "Hora do Desafio";

//Crie uma função que exiba no console a mensagem 
// O botão foi clicado sempre que o botão Console for pressionado.
function exibirMensagem() {
    console.log("O botão foi selecionado");
}

//Crie uma função que exiba um alerta com a mensagem:
//  Eu amo JS, sempre que o botão Alerta for pressionado.

function exibirAlerta() {
    alert("Eu amo JS")   
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function exibirPrompt(){
    let cidade = prompt ("Digite o nome da cidade");
    alert (`Estive em ${cidade} e lembrei de você`)
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function exibirSoma(){
    let numero01 = parseInt(prompt( "Digite o primeiro número"));
    let numero02 = parseInt(prompt( "Digite o segundo número"));
    let soma = numero01 + numero02;
    alert (`O resultado da soma dos números é : ${soma}`);

}