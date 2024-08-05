// Seleciona os botões pelo ID
var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");

// Opções para os botões
let opcoes1 = [
    "Todas as áreas de desmatamento são restauradas",
    "Descobrir viagem no tempo",
];

let opcoes2 = [
    "O aquecimento global dos últimos 70 anos é revertido em 50%",
    "Descobrir teletransporte",
];

// Índice para rastrear o estado atual
let index = 0;

// Adiciona um evento de clique ao primeiro botão
botao1.addEventListener("click", function() {
    if (index < opcoes1.length) {
        botao1.textContent = opcoes1[index];
        botao2.textContent = opcoes2[index];
        index++;
    } else {
        botao1.textContent = "Você finalizou todas as perguntas";
        botao2.textContent = "Você finalizou todas as perguntas";
    }
});

// Adiciona um evento de clique ao segundo botão (opcional, se desejar que o botão2 também mude)
botao2.addEventListener("click", function() {
    if (index < opcoes2.length) {
        botao1.textContent = opcoes1[index];
        botao2.textContent = opcoes2[index];
        index++;
    } else {
        botao1.textContent = "Você finalizou todas as perguntas";
        botao2.textContent = "Você finalizou todas as perguntas";
    }
});
