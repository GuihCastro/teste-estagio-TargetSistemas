// Criando uma interface para ler entrada do usuário
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter string
function reverseString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

// Recebendo e invertendo a string
rl.question('Digite uma string para inverter: ', (inputString) => {
    const revertedString = reverseString(inputString);
    console.log('String original:', inputString);
    console.log('String invertida:', revertedString);
    rl.close();
});
