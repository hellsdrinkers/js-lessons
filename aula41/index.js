// Escreva uma função chamada ePaisagem que recebe 02 argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.


const ePaisagem = (largura, altura) => largura > altura ? true : false;
console.log(ePaisagem(5, 20));
