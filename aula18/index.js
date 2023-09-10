const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// };

// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);

// console.log(pessoa1);

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Juanita',
//     idade: 22
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);