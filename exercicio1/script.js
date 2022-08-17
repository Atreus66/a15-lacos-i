// let coxinha = prompt('Deseja comer mais coxinhas??\n S - Sim\n N - Não').toLowerCase()
// let totalCoxinhas = 0

// while(coxinha === 's'){
//     totalCoxinhas = totalCoxinhas + 1 
//     coxinha = prompt('Deseja comer mais coxinhas??\n S - Sim\n N - Não').toLowerCase()
//         console.log('Você comeu até agora', totalCoxinhas,'coxinhas')
// }
// console.log('Sua conta é',totalCoxinhas*2.5,)


let desejaMais = prompt("deseja comer mais coxinhas? \ns -sim \nn -não").toLowerCase()
while (desejaMais !== "s" || desejaMais !== "n") {
    desejaMais = prompt("Opção invalida tente novamente \ndeseja comer mais coxinhas? \ns -sim \nn -não").toLowerCase()
}
let conta = 0
while (desejaMais === "s") {
    conta += 2.50
    desejaMais = prompt("deseja comer mais coxinhas? \ns -sim \nn -não").toLowerCase()
}
console.log(`Valor total da conta e R\$ ${conta.toFixed(2)}`);
