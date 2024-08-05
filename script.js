
var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");


let opcoes1 = [
    "Todas as áreas de desmatamento são restauradas mas os impostos sobem em 200%",
    "Descobrir viagem no tempo mas só para o futuro, na mesma linha do tempo (sem replicas) e com delay de 1 minuto entre cada uso",
];

let opcoes2 = [
    "O aquecimento global dos últimos 70 anos é revertido em 50% mas o crédito vai para a China",
    "Descobrir teletransporte mas somente para lugares próximos (3 metros)",
];


let index = 0;


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
