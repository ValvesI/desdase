var botao = document.querySelector(".botao1");
var botao1 = document.querySelector(".botao2");

let opcoes1 = [
    "Metade da população global desabrigada recebe moradia",
    "Todas as areas de desmatamento são restauradas",
    "Descobrir viagem no tempo",
];

for (let i = 0; i < 3; i++){
        // Adiciona um evento de clique ao botão
        botao.addEventListener("click", function() {
            // Verifica o texto atual do botão
                botao.textContent = opcoes1[i];
            i++
        });
    
        botao.addEventListener("click", function() {
            // Verifica o texto atual do botão
                botao.textContent = opcoes2[i];
            i++
        });}