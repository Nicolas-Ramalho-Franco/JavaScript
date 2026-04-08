//let nome =prompt("Qual e o seu nome:")
//let idade =prompt("Qual e a sua idade?:")
//let curso =prompt("Qual e o seu curso:")
//alert(`Ola,meu nome e ${nome}, tenho ${idade} anos e estudo ${curso} na Fiap`)

//let distancia=prompt("Qual e a distancia de M para CM:")
//let nova_distancia = distancia * 100
//alert(`sua nova distancia e ${nova_distancia} Metros`) 


//let peso= Number(prompt("Qual o seu peso:")) 
//let altura=Number(prompt("Qual e a sua altura em metros:"))
//let imc = peso/(altura * altura)
//alert(`Seu imc e ${imc.toFixed(2)}`) 

let N1= Number(prompt("Qual o seu primero numero:"))
let N2= Number(prompt("Qual o seu segundo numero:"))
let operacao= prompt("Qual a opc que vc quer:(+ , - , / , *)")
let resultado;

if(operacao === "+"){
    resultado = N1 + N2
    alert (`Seu resultado foi ${resultado}`)
}else if (operacao === "-")
    {
    resultado = N1 - N2
    alert (`Seu resultado foi ${resultado}`)
}else if (operacao=== "/"){
   if(N2 !==0){
     resultado = N1 / N2
    alert (`Seu resultado foi ${resultado}`)
   }else{
    alert("Dividir por zero paizao")
   }

}else if(operacao === "*"){
    resultado = N1 * N2
    alert (`Seu resultado foi ${resultado}`)
}else{
    alert("Deu ruim chefe")
}






//let peso= Number(prompt("Digite o quanto quer em g"))
//let pagar = peso * 5
//alert(`vai pagar isso ${pagar}`)