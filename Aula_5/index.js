// Usando conforme aulas anteriores, quando o valor não será alterado const e quando pode ser alterado let. 
// Cálculo de IMC é peso / (altura * altura)
// Filipe Job tem  24 anos, pesa 63 kg, tem 1.70 de altura e seu IMC é de 21.79930795847751.
// Filipe nasceu em 1998.
//Podemos usar console.log(`${variável} restante do texto`), inclusive este é o método mais comum. 
//Neste caso, também não são necessárias , e ''''


const nome = 'Filipe';
const sobrenome = 'Job';
const idade = 24;
const peso = 63;
const altura = 1.70;
let imc;
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2022 - idade; 

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);


