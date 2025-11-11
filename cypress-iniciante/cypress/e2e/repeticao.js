// luping  , trecho de codigo que se repete varias vezes 
const names = ['Eduardo', 'Maria', 'Joao', 'Fernanda']


// para cada um desses elementos vou executar uma função, e essa função vai receber um elemento
names.forEach((elemento) => {
    console.log(elemento)

})

console.log(names.length)
// Executar enquanto index for menor que names
for (var index = 0; index < names.length; index++) {
    console.log(index)
}