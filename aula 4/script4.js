// function contagemRegreciva(numero){
//     while(numero >= 1){
//         console.log(numero)
//         numero --
//     }
// }

// const pegaNumero = Number(prompt("Digite um numero:"))
// contagemRegreciva(pegaNumero)//nome da variavel q vc vai usar 


// let count = 0// criar a variavel fora do DO para o WHILE conseguir ver 
// do {
//     console.log(count)
//     count++
// }while(count<5)

// let nome // cria uma variavel vazia
// do {
//     nome =prompt("Digite o seu nome")
//     if(!nome&&nome.length <3){
//         alert("errado")
//     }
//     if (!nome){
//         alert("Seu nome e invalido")
//     }
// }while(!nome &&nome.length < 3) // em quanto o nome for menor que 3 continua

// let idade
// do {
//     idade = Number(prompt("Digita a sua idade"))
//     if(idade<0 || idade>150){
//         alert("ta errado")
//     }
// }while(idade<0 || idade>150)

// let salario
// do {
//     salario = Number(prompt("Qual o seu salario"))
//     if(salario <0){
//         alert("Ta duro chefe")
//     }
// }while(salario <0)

// let genero
// do{
//     genero = prompt("Qual o seu genero M ou F ?")
//     genero.toLocaleUpperCase()
//     if(genero!="m" && genero!="f"){
//         alert("Ta sem indeciso pai?????")
//     }
// }while(genero!=="m" && genero!=="f")

// let civil 
// do{
//     civil = prompt("Qual o seu estado civil")
//     civil.toLocaleUpperCase()
//     if(civil !="s" && civil!="v" && civil!="c" && civil!="d"){
//         alert("Seu encalhado")
//     }
// }while(civil !="s" && civil!="v" && civil!="c" && civil!="d")

// //!variavel = verifica c a variavel e falsa caso seja vazio ,0 nan,null

// for (let i = 0; i<10; i++){   // for (variavel ; onde vai parar ; e cada fez q rodar como vai mecher)
//     console.log(i)
// }

let numero
numero = Number(prompt("Digita o seu numero"))
let resp
for (let i=0 ; i <=10 ; i ++){
    resp = numero * i
    alert(`${numero} X ${i} = ${resp}`)
    console.log(`${numero} X ${i} = ${resp}`)
}