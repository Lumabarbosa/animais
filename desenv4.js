/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional 
para armazenar informações sobre animais e as suas características.
Cada linha deve representar um animal e cada coluna terá as diferentes informações 
sobre ele, como nome, espécie e idade. */



function imprimirNomes(){
    let listaNomes = []
    let listaEspecie = []
    let listaIdade = []
    for (let i = 0; i < 3; i++) {
        let especie = prompt("Digite a espécie: ")
        listaEspecie[i] = especie;
        let nome = prompt("Digite seu nome: ")
        listaNomes[i] = nome;
        let idade = prompt("Digite a idade desse animal: ")
        listaIdade[i] = idade;
    }
    for (let i = 0; i < 3; i++) {
        console.log(listaEspecie[i])
        console.log(listaNomes[i])
        console.log(listaIdade[i])
    }
    return [listaEspecie[i], listaNomes[i], listaIdade[i]]
}
imprimirNomes()

