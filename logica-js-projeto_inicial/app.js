
//Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo(){
alert ("Olá! Seja bem vinda ao mundo da programação!")
}

//Criar uma função que recebe 
// um nome como parâmetro e exibe "Olá, [nome]!" no console.
  function exibirNome(){
    let nome = prompt("Digite o seu nome, por favor.")
    alert (`Olá ${nome}, seja bem vinda`)
    }

//Criar uma função que recebe 
// um número como parâmetro e retorna o dobro desse número.
   function exibirDobro() {  // <-- nome diferente!
    let numero = parseFloat(prompt("Digite um número:"));
    let dobro = numero * 2;
    alert(`O dobro de ${numero} é ${dobro}`);
}


//Criar uma função que recebe três números como parâmetros 
// e retorna a média deles.

function exibirMedia(){
    let numero01 = parseInt(prompt("Digite o primeiro número"));
    let numero02 = parseInt(prompt("Digite o segundo número"));
    let numero03 = parseInt(prompt("Digite o terceiro número"));
    let media = (numero01+numero02+numero03)/3;
    alert (`A média é :${media.toFixed(2)}`);
}
   
    

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function exibirMaiorNumero(num01,num02){
    const n1 = parseFloat(prompt("Digite o primeiro número:"));
    const n2 = parseFloat(prompt("Digite o segundo número:"));

    if (num01>num02){
      alert(`O maior número é ${num01}`); 
    } else if(num02>num01) {
        alert(`O maior número é ${num02}`); 
    } else{
        alert("Os números são iguais") ;
    }
}
//Criar uma função que recebe um número como parâmetro 
// e retorna o resultado da multiplicação desse número por ele mesmo

function exibirQuadrado() {
  const numero = parseFloat(prompt("Digite um número:"));
  const resultado = numero * numero;
  alert(`O quadrado de ${numero} é ${resultado}`);}
