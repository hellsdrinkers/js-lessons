// Robson Santos nasceu em 1980, tem 40 anos, pesa 79 kg, tem 1.9 de altura e seu IMC é de 26.

const nome = 'Robson';
const sobrenome = 'Santos';
const idade = 40;
const peso = 79;
const alturaEmMt = 1.90;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

anoNascimento = 2023 - idade;
indiceMassaCorporal = peso / (alturaEmMt * alturaEmMt);

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}, tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmMt} de altura e seu IMC é de ${indiceMassaCorporal}.`);