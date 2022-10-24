//exemplo 01
 const numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

    console.log(numerosPares);


//exemplos 02
const listaDeValores = [1, 2, 3, 4, 5];
const valor = listaDeValores[2];
console.log(valor);

//exemplo 03
const numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(i);
}

console.log(numeros);

//exemplo 04
const numerosParess = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosParess.push(i);
}

console.log(numerosParess);