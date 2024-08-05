var botao = document.getElementById("#botao1");
var botao1 = document.getElementById("#botao2");

let opcoes1 = [
    "Metade da população global desabrigada recebe moradia",
    "Todas as areas de desmatamento são restauradas",
    "Descobrir viagem no tempo",
];

let opcoes2 = [
    "Metade da população faminta recebe alimento",
    "O aquecimento global dos ultimos 70 anos é revertido em 50%",
    "Descobrir teletransporte",
];

for (let i = 0; i < 3; i++){
        // Adiciona um evento de clique ao botão
        botao.addEventListener("click", function() {
            // Verifica o texto atual do botão
                botao.textContent = opcoes1[i];
                botao1.textContent = opcoes2[i];
            i++
        });}