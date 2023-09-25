//Nome dos programas
    //Exercício 01
    console.log("1 - Calcular área de um circulo")
    console.log("2 - Calcular área de um triângulo")
    console.log("3 - Nome e Sobrenome")
    console.log("4 - Soma de dois números")
    console.log("5 - Calcular Salário")
    console.log("6 - Converter Celsius para Fahrenheit")
    console.log("7 - Converter Fahrenheit para Celsius")
    console.log("8 - Calcular volume de uma lata")
    console.log("9 - Calcular o consumo de combustível")
    console.log("10 - Trocar o valor das variáveis")
    //Exercício 02
    console.log("11 - Menu de opções")
    console.log("12 - Calcular nota")
    console.log("13 - Categoria por idade")
    console.log("14 - Calcular X na função")
    
    let programa = parseInt(prompt("Escreva o número do programa que deseja rodar: "))
    switch (programa){
        case 1: CalcularAreaCirculo(); break;
        case 2: CalcularAreaTriangulo(); break;
        case 3: NomeSobrenome(); break;
        case 4: Soma(); break;
        case 5: CalcularSalario(); break;
        case 6: ConverterCelsiusParaFahrenheit(); break;
        case 7: ConverterFahrenheitParaCelsius(); break;
        case 8: VolumeLata(); break;
        case 9: CalculaGasolina(); break;
        case 10: TrocarValores(); break;
        case 11: Menu(); break;
        case 12: CalcularNota(); break;
        case 13: CategoriaIdade(); break;
        case 14: CalcularFuncao(); break;
        default: console.log("Opção inválida!")
    }   

function CalcularAreaCirculo(){
    let area;
    let raio = parseFloat(prompt("Informe o raio da circunferência: "))
    area = Math.PI * Math.pow(raio, 2)
    console.log(`Área da circunferência = ${area}`)
}

function CalcularAreaTriangulo(){
    let area;
    let base = parseFloat(prompt("Informe a base do triângulo em metros: "))
    let altura = parseFloat(prompt("Informe a altura do triângulo em metros: "))
    area = (base*altura)/2
    console.log(`Área do triângulo = ${area}`)
}

function NomeSobrenome(){
    let nome = prompt("Informe o seu primeiro nome: ")
    let sobrenome = prompt("Informe seu sobrenome: ")
    let nomeCompleto = (`${nome} ${sobrenome}`)
    console.log(`Nome completo = ${nomeCompleto}`)
}

function Soma(){
    let num1 = parseInt(prompt("Informe o primeiro número: "))
    let num2 = parseInt(prompt("Informe o segundo número: "))
    let soma = num1+num2
    console.log(`Soma = ${soma}`)
}

function CalcularSalario(){
    let HT = prompt("Informe a quantidade de horas trabalhadas nom mês: ")
    let VH = prompt("Informe o valor da hora trabalhada: ")
    let PD = prompt("Informe o percentual do desconto: ")
    let SB = HT * VH
    let TD = (PD/100)*SB
    let SL = SB - TD
    console.log(`Horas trabalhadas: ${HT}\n Salário Bruto = ${SB}\n Desconto = ${TD}\n Salário Líquido = ${SL}`)
}

function ConverterCelsiusParaFahrenheit(){
    let C = prompt("Informe a temperatura em graus Celsius: ")
    let F = (9 * C + 160) / 5
    console.log(`Temperatura em Fahrenheit = ${F}`)
}

function ConverterFahrenheitParaCelsius(){
    let F = prompt("Informe a temperatura em graus Fahrenheit: ")
    let C = (F - 32) * (5/9)
    console.log(`Temperatura em Celsius = ${C}`)
}

function VolumeLata(){
    let RAIO = prompt("Informe o raio da lata: ")
    let ALTURA = prompt("Informe a altura da lata: ")
    let VOLUME = Math.PI * Math.pow(RAIO, 2) * ALTURA
    console.log(`Volume da lata = ${VOLUME}`)
}

function CalculaGasolina(){
    let TEMPO = prompt("Informe o tempo gasto na viagem (hrs): ")
    let VELOCIDADE = prompt("Informe a velocidade média da viagem: ")
    let DISTANCIA = TEMPO*VELOCIDADE
    let LITROS_USADOS = DISTANCIA/12
    console.log(`Velocidade média durante a viagem: ${VELOCIDADE}\nTempo gasto na viagem: ${TEMPO}\nDistância percorrida: ${DISTANCIA}\nQuantidade de litros utilizado na viagem: ${LITROS_USADOS}`)
}

function TrocarValores() {
    let A = prompt("Informe o valor de A: ")
    let B = prompt("Informe o valor de B")
    let tempA = A
    A = B
    B = tempA
    console.log(`Novo valor de A = ${A}\nNovo valor de B = ${B}`)
}

function Menu(){
    let opcao = parseInt(prompt("Menu de opções\n1. Somar dois números.\n2. Raiz quadrada de um número.\nDigite a opção desejada:"))
    switch (opcao){
        case 1: Soma(); break;
        case 2: RaizQuadrada(); break;
    }
}

function RaizQuadrada(){
    let num = prompt("Informe o número para a conta: ")
    let Raiz = Math.sqrt(num);
    console.log(`Número inicial = ${num}\nRaíz quadrada do número = ${Raiz}`)
}

function CalcularNota() {
    let trabalho = parseFloat(prompt("Informe a nota do trabalho de laboratório: "))
    let pesoTrabalho = parseFloat(prompt("Informe o peso do trabalho de laboratório: "))
    let avaliacao = parseFloat(prompt("Informe a nota da avaliação semestral: "))
    let pesoAvaliacao = parseFloat(prompt("Informe o peso da avaliação semestral: "))
    let exame = parseFloat(prompt("Informe a nota do exame final: "))
    let pesoExame = parseFloat(prompt("Informe o peso do exame final: "))
    let media = parseFloat(prompt("Informe a média necessária para a aprovação do aluno:"))
    let nota = ((trabalho*pesoTrabalho)+(exame*pesoExame)+(avaliacao*pesoAvaliacao))/(pesoExame+pesoTrabalho+pesoAvaliacao)
    console.log(`${nota}`)
    if(nota > media){
        console.log("Aprovado")
    } else if(nota > 4){
        console.log("Exame especial")
    } else{
        console.log("Reprovado")
    }
}

function CategoriaIdade() {
    let idade = parseInt(prompt("Informe a idade do atleta: "))
    if(idade <= 5){
        console.log("Idade inválida")
    } else if(idade <= 7){
        console.log("Categoria Infantil")
    } else if(idade <= 10){
        console.log("Categoria Juvenil")
    } else if(idade <= 15){
        console.log("Categoria Adolescente")
    } else if(idade <= 30){
        console.log("Categoria Adulto")
    } else if(idade > 30){
        console.log("Categoria Sênior")
    }
}

function CalcularFuncao(){
    let x = parseFloat(prompt("Informe o valor de X:"))
    let h = Math.pow(x,2)-16
    let f, g
    if(h >= 0) {
        f = h
    } else {
        f = 1
    }
    if(x > 5){
        g = Math.pow(x,2)+16
    } else {
        g = (-x)/2
    }
    console.log(`H(x) = ${h}\nF(x) = ${f}\nG(x) = ${g}`)
}

