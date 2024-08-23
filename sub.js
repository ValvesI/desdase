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
                afirmacao: "afirmacao",
            },
            {
                texto: "Metade da população faminta recebe alimento mas todos deixam de sentir o sabor da comida pelo resto da vida",
                afirmacao: "afirmacao",
            },
        ] 
    },
    {
        enunciado: "no âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Todas as áreas de desmatamento são restauradas mas os impostos sobem em 200%",
                afirmacao: "afirmacao",
            },
            {
                texto: "O aquecimento global dos últimos 70 anos é revertido em 50% mas o preço do barril de petroleo aumenta em 200%",
                afirmacao: "afirmacao",
            },
        ] 
    },
    {
        enunciado: "no âmbito tecnologico, você prefere:",
        alternativas: [
            {
                texto: "Descobrir viagem no tempo mas só para o futuro, na mesma linha do tempo (sem replicas) e com delay de 1 minuto entre cada uso",
                afirmacao: "afirmacao",
            },
            {
                texto: "Descobrir teletransporte mas somente para lugares próximos (3 metros)",
                afirmacao: "afirmacao",
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
