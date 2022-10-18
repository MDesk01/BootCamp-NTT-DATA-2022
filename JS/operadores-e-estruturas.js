//exercício prático 01

const nota1 = 7
const nota2 = 5
const nota3 = 7.55

let media = (nota1 + nota2 + nota3)/3

if(media < 5){
    console.log("Reprovado")
}else if(media === 5 && media < 7){
    console.log("Recuperação")
}else if(media > 7){
    console.log("Aprovado")
}