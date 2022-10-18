//exemplo simples de IF
console.log("Trabalhando com algoritmos de condições.")
const x = 1;
const y = 2;
let z = (x + y)/2;

if(z/x == 2){
    console.log("Tipo 1");
} else{
    console.log("Tipo 2");
}

//variáveis tipo booleana
const camisaAzul = true;
const camisaVermelha = false;

//trabalhando com variável booleana

const numero = 10
const numeroPar = (numero % 2) == 0 //verifica se o numero é par, se o resto for igual a zero
console.log(numeroPar);

//LEMBRETE! PARA MELHOR PRÁTICA, USAR 3 iguais(===) para não confundir os tipos
//exemplo
const numerox = 10
const numeroParr = (numerox % 2) === '0'
console.log(numeroParr); //vai retornar "FALSE" por que um numero não é igual tipo texto

//exemplo 2 (trabalhando condições + números aleatórios)
const variavelX = Math.random() * 200
const variavelY = 100
console.log(variavelX.toFixed(0))
if(variavelX % 2 === 0 && variavelX <= 100){
    console.log("Número par menor que", variavelY)
}else if(variavelX % 2 === 0 && variavelX >= 100){
    console.log("Número par maior que", variavelY)
}else if(variavelX % 2 !== 0 && variavelX <= 100){
    console.log("Número ímpar menor que", variavelY)
}else if(variavelX % 2 !== 0 && variavelX >= 100){
    console.log("Número ímpar maior que", variavelY)
}
