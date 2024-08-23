const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-pergumtas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-principal');

const pergumtas = [ 
    {
        enunciado: "no âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Metade da população global desabrigada recebe moradia mas pelo menos uma pessoa fica na sua casa",
                afirmacao: "Alguem aleatório ira morar como você enquanto o metade dos desabrigados não será mais desabrigado",
            },
            {
                texto: "Metade da população faminta recebe alimento mas todos deixam de sentir o sabor da comida pelo resto da vida",
                afirmacao: "Metade da população que passava fome agora não ira mais sentir fome mas também não sentem mais o gosto da comida ",
            },
        ] 
    },
    {
        enunciado: "no âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Todas as áreas de desmatamento são restauradas mas os impostos sobem em 200%",
                afirmacao: "Agora existem mais árvores mais as pessoas não estão felizes com os impostos",
            },
            {
                texto: "O aquecimento global dos últimos 70 anos é revertido em 50% mas o preço do barril de petroleo aumenta em 200%",
                afirmacao: "Agora existe menos poluição mas as pessoas não estão felizes c",
            },
        ] 
    },
    {
        enunciado: "no âmbito tecnologico, você prefere:",
        alternativas: [
            {
                texto: "Descobrir viagem no tempo mas só para o futuro, na mesma linha do tempo (sem replicas) e com delay de 1 minuto entre cada uso",
                afirmacao: "Você descobre como viajar pro futuro mas não pode contar pra ninguem no passado",
            },
            {
                texto: "Descobrir teletransporte mas somente para lugares próximos (3 metros)",
                afirmacao: "Você pode ser teleportar para lugares próximos, e só",
            },
        ] 
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if(atual >= pergumtas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = pergumtas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa(){
    for (const text of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = text.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(text));
        caixaAlternativas.appendChild(botaoAlternativa);
    }

    }

    function respostaSelecionada(text){
        const afirmacoes = text.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Em resumo, você escolheu...";
        caixaResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }

    mostraPergunta();
