//exemplo 01
function escreveNome(nome){
   return nome;
}

//exemplo 02 - continuacao
function verificaIdade(idade){
    
    if(idade < 18){
        console.log("Meu nome é "+escreveNome('Mateus')+" e eu sou menor de idade.");
    }else{
        console.log("Meu nome é "+escreveNome('Mateus')+" e eu sou maior de idade.");
    }
}
verificaIdade(18);

//mais exemplos

function incrementarJuros(valor, percentualDeJuros) {
    const incremento = (percentualDeJuros / 100) * valor;
    return valor + incremento;
}
console.log("Juros incrementado: " + incrementarJuros(100,10))

//mais exemplos (2)
function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    return media;
}

console.log(calcularMedia(5, 5));