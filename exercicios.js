// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  numero1 = num1
  numero2 = num2
  return num1 + num2

}
soma(num1, num2)

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('insira uma mensagem')

  console.log(mensagem)
}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  const altura = prompt("insira a altura")
  const largura = prompt("insira a largura")
  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = prompt("qual o ano atual?")
  const anoNascimento = prompt("Que ano você nasceu")
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Qual seu nome?")
  const idade = Number(prompt("Qual sua idade?"))
  const email = prompt("Qual seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt("Diga uma cor favorita")
  const cor2 = prompt("Diga outra cor favorita")
  const cor3 = prompt("Diga outra cor favorita")

  meuArray = [cor1, cor2, cor3]

  console.log(meuArray)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  let frase = string.toUpperCase()
  return frase

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  custoEvento = custo
  valorEntrada = valorIngresso

  return custoEvento / valorEntrada

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  let tamanho1 = string1.length
  let tamanho2 = string2.length

  return tamanho1 === tamanho2


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  let meuArray = array
  return meuArray[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  const meuArray = array
  removeUltimo = meuArray.pop()

  return removeUltimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length-1]

array[array.length-1] = primeiroElemento
array[0] = ultimoElemento

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

frase1 = string1.toLowerCase()
frase2 = string2.toLowerCase()

igualdade = frase1 === frase2

return igualdade

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const idade = confirm("Você é maior de 18 anos?")
  
  const escolaridade = confirm("Já completou o ensino médio?")
  
  const disponibilidade = confirm("Você tem disponibilidade de horários?")
  
  logar = idade && escolaridade && disponibilidade
    
  console.log(logar);

}