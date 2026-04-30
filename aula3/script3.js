//function saudacao(nome,periodo = "Dia"){//isso e um (nome) parametro
  //  alert(`Ola ${nome}, bom${periodo}`) // periodo = "Dia" isso deixa como padrão quando n tem o periodo definido
//}

//const fraseSaudacao = saudacao("joao","Noite")

//saudacao("nicolas","Dia")// isso dentro dos (e um argumento)

// Return para a funcao ele acaba 
//let n1 = prompt ("Digite o numero 1")
//let n2 = prompt("Digite o numero 2")

//receba(n1,n2)

// function receba (numero1,numero2){
//     if (numero1>numero2){
//         return alert(`${numero1} e maior`)
//     } else if (numero1<numero2){
//         return alert(`${numero2} e maior`)
//     } else{
//         return alert(`${numero1} = ${numero2}`)
//     }
// }


//const recebaDevolucao = receba(10,10)

// let txt = prompt("digita ai")

// formartarTxt(txt)

// function formartarTxt(texto){
//     alert(texto.trim().toUpperCase())
// }

//   texto aleatorio para eu entender oq esta acontecendo  

let aleatorio = Math.floor(Math.random()*11)+1
let numero = prompt("digita ai")

tigrinho(aleatorio,numero)

function tigrinho(ale,n){
    if (ale === n){
        alert("Acertou")
    }else{
        alert("Errou")
    }
}