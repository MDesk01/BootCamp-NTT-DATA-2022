//trabalhando com funções

function teste(){ //criando a função
    console.log("Função teste!"); //comando que existe dentro da função
}

teste(); //chamando(executando) a função

//mais funções
function nomeCompleto(nomes){
    console.log("Nomes:" + nomes);
}

nomeCompleto('Mateus');
nomeCompleto('Augusto');


//mais funções - 2
const quadradoDeDez = quadrado(10);
function quadrado(valor){
    return valor * valor;
}
console.log(quadradoDeDez);


//mais funções - 3
function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) *valor
    return valor + valorDeAcrescimo;
}
console.log(incrementarJuros(100, 10));



//LAÇOS DE REPETIÇÃO
//Exercício da sequencia de fibonacci
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for(var i = 2; i < 10; i++){
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log('Sequencia de Fibonacci: ',fibonacci);
 