let tabuada = Number(prompt("Digite o numero para criar a tabuada"))
while (isNaN(tabuada)) {
    tabuada = Number(prompt("Numero invalido tente novamente"))
}


let mult = 0
for (let i = 1; i <= 10; i++) {
    mult =  tabuada * i
    console.log(`${tabuada} * ${i} = ${mult}`)
    console.log("-".repeat(20))
}