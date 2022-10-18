//tratando coma arrays
//contando quantas infos tem
const x = 10
var nomes = ['joao', 'maria', 'kelly', x]
console.log(nomes.length)

//exibindo valores dentro do array
const y = 15
var array = ['Joicy', y]
console.log(array)

//adicionar item ao final do array
const arrayX = ['Mateus']
var adicionar1 = arrayX.push('Augusto')
console.log(arrayX)

//adicionar item no inicio do array
var t = 5
const arrayY = ['Mateus']
var adicionar2 = arrayY.unshift('Augusto', t)
console.log(arrayY)

//remover item do início
var o = 5
const arrayZ = [o,'Mateus']
var remover1 = arrayZ.shift()
console.log(arrayZ)

//remover item do fim
var q = 5
const arrayW = [q ,'Mateus']
var remover2 = arrayW.pop()
console.log(arrayW)

//procurar índice de um item
var arrayQ = ['Mateus', 'Augusto', 'Souza', 'Azevedo']
console.log(arrayQ.indexOf('Augusto'))

