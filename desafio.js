const readline = require('readline');

// Criar uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para classificar o nível do herói
function classificarHeroi(nome, experiencia) {
    let nivel;

    // Estrutura de decisão para classificar o nível do herói
    if (experiencia <= 1000) {
        nivel = "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        nivel = "Bronze";
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        nivel = "Prata";
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        nivel = "Ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Saída da mensagem com o nome e nível do herói
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Solicitar o nome do herói
rl.question("Digite o nome do herói: ", (nome) => {
    // Solicitar a quantidade de experiência (XP) do herói
    rl.question("Digite a quantidade de experiência (XP) do herói: ", (xp) => {
        const experiencia = parseInt(xp);
        
        // Verificar se a entrada de experiência é válida
        if (isNaN(experiencia)) {
            console.log("Por favor, insira um número válido para a experiência.");
        } else {
            classificarHeroi(nome, experiencia);
        }
        
        // Fechar a interface
        rl.close();
    });
});
