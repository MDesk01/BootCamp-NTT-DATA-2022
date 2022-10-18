//declarando a variável(é um tipo que pode ser mudado)
let x = 1;

//declarando uma constante(é um tipo que não pode ser mudado)
const y = 2;

//variável comum
var z = 3;

//exemplo de strings
var string1 = 'Soma: ';
var string2 = 'Média Aritmética: '

//soma simples
console.log(string1 , x + y + z);

//media aritmetica
console.log(string2, (x+y+z)/3);

//somando com variáveis
const numero01 = 15;
const numero02 = 5;
let resultado = numero01 + numero02;
console.log("Resultado: ", resultado);

//usando toFixed para "arredondar o valor", deixando apenas N casas decimais após a vírgula
const n1 = 1.55;
const n2 = 5;
const n3 = n1 / n2;
console.log("Resultado do toFixed: " , n3.toFixed(2));
