//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programa. Aqui você deverá desenvolver a lógica para resolver o problema.

//Cria a lista de amigos para armazenar os nomes
const listaDeAmigos = [];

//Função para adicionar amigos na lista
function adicionarAmigo() {
    const inputName = document.getElementById('amigo');
    const nome = inputName.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    listaDeAmigos.push(nome);
    inputName.value = "";
    exibirListaDeAmigos();
}

//Função para atualizar lista de amigos na tela
function exibirListaDeAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        lista.innerHTML += `<li>* ${listaDeAmigos[i]}</li>`;
    }
}

//Função para sortear os amigo(a)s
function sortearAmigo(){
    if (listaDeAmigos.length === 0) {
        alert("Nenhum amigo(a) disponível para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];

    const resultadoDoSorteio = document.getElementById('resultado');
    resultadoDoSorteio.innerHTML = `Amigo(a) sorteado(a): <strong>${amigoSorteado}</strong>`;
}
