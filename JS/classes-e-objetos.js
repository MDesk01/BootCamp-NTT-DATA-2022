//criando um objeto simples
const objeto = {
    nome: 'Mateus Augusto',
    idade: 30,
    altura: 1.75 + 'm'
};

console.log('Objeto: ' , objeto)
console.log('Nome:' + objeto.nome);
console.log('Idade: ' + objeto.idade);
console.log('Idade: ' + objeto.altura);


//mais exemplos (1)
const pessoa = {
    name: 'Joicy',
    year: 30,
    height: 1.70 + 'M',
    descricao: function(pessoa){
        console.log(`Nome: ${this.name} + Altura: ${this.height} + Idade: ${this.year}`);
    }
}
pessoa.descricao();

//outro modo
const carro = {
    nomeCarro: 'Toro',
    ano: 2022,
    peso: 1650 + 'KG'
}
carro.descrever = function(){
    console.log(`Nome do Carro: ${this.nomeCarro} + Ano: ${this.ano} + Peso: ${this.peso}`);
}
carro.descrever();

//mais um exemplo
const psita = {
    raça: 'cara-branca',
    idadeMax: 20 + 'anos'
}
console.log('Raça '+psita.raça+' e idade Máx.de '+psita.idadeMax);

//


