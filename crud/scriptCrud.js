//document.getElementById("btnAdicionar") velho 
const btn = document.querySelector("#btnAdicionar") // novo
const input = document.querySelector("#inputTexto") 
const resultado = document.querySelector("#resultado") 
const listaFilmes = document.querySelector("#listaFilmes") 

let filmes = ["007", "interstellar","Star Wars"]
//console.log(filmes[0])
//filmes[2] = "Harry potter" // isso adiciona no Array
//filmes.push("Carros 3") // isso adiciona no fim do Array
//filmes.unshift("up") // isso adiciona no inicio do Array

// CREAD do CRUD
btn.addEventListener("click",function clicar(){
    let texto = input.value
    filmes.push(texto)
    input.value = ""
})

// Read
function renderizar(){
    filmes.forEach(function pegafilme(elementoAtual,indice){
       
        let itemLista = document.createElement("li") // isso esta criando um botão conforme vai adicionando o texto 
        itemLista.textContent = elementoAtual
        listaFilmes.append(itemLista) // ele adiciona uma tag na outra
    })
}
renderizar()

