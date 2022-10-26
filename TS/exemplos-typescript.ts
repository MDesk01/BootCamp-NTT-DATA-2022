//exemplo 01 - TS
type Hero = {
    nome: string;
    vulgo: string;
    telefone: number;
}

function ligarPara(heroi: Hero){
    console.log("Ligando para: " + heroi.telefone);
}

ligarPara({
    nome: "Mateus",
    vulgo: "Capitão",
    telefone: 79981151537
})

//exemplo 02 - TS
//variáveis primitivas
let ligado: boolean = true
let nome: string = "Mateus"
let idade: number = 30
let altura = 1.75 + " metros"

//variáveis neutras
let nulo: null = null
let indefinido: undefined = undefined

//variáveis abrangentes
let vazio:void = void
console.log('Dados: '+ ligado, nome, idade, altura)


// criando objeto do jeito correto
type produtoLoja ={
    nome: string
    peso: number
}

let smartphone: produtoLoja = {
    nome: "iPhone 13",
    peso: 17
}

//arrays - declarando vetores

//01 - forma mais simples e amigável
let dados: string[] = ['mateus','augusto'];

//02 - forma número 2
let dados2: Array<string> = ['souza', 'azevedo'];

//arrays de multiplos tipos
let infos:(string | number)[] = ['mateus', 1.75]
let infos2:(string | number | boolean)[] = ['mateus', 1.75, true]

//exemplo de  tuplas - são diferentes dos arrays, 
//pois nas tuplas, devem vir os dados na sequencia dos tipos
let boleto: [string, number] = ["agua", 199.99]

//exemplo de date
let aniversario: Date = new Date("2022-12-02 05:00")
console.log(aniversario)

//funções
//soma de dois numeros
let soma: number = addNumber(2, 3)
function addNumber(a: number, b:number){
    return a + b
}
console.log(soma)


//soma de duas strings
let somaString: string = addString('mateus', 'augusto')

function addString(x: string, y: string){
    return x + " " + y
}
console.log(somaString)

//funções multi-tipos

function callToPhone(phone: string | number){
    return phone
}
console.log(callToPhone(7))

//funções assincronas

async function getDataBase(id: number): Promise<string>{
    return "mateus"
}


