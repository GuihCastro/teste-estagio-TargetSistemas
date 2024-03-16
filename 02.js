// Criando uma interface para ler entrada do usuário
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular a sequência de Fibonacci até o n-ésimo termo
function fibonacci(n) {
    let fibonacciSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }
    return fibonacciSequence;
}

// Função para verificar se um número pertence à sequência de Fibonacci
function verifyBelonging(number, sequence) {
    return sequence.includes(number) ? `O número ${number} pertence à sequência de Fibonacci.` : `O número ${number} não pertence à sequência de Fibonacci.`;
}

// Função principal
function main() {
    rl.question("Informe o número de elementos da sequência de Fibonacci a serem gerados: ", (n) => {
        const elementsNumber = parseInt(n);
        rl.question("Informe o número que você quer verificar se pertence à sequência de Fibonacci: ", (verifyNumber) => {
            const number = parseInt(verifyNumber);
            const sequence = fibonacci(elementsNumber);
            console.log("Sequência de Fibonacci:", sequence);
            const result = verifyBelonging(number, sequence);
            console.log(result);
            rl.close();
        });
    });
}

main();
