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
                texto: "alternativa 1",
                afirmacao: "afirmacao",
            },
            {
                texto: "alternativa 2",
                afirmacao: "afirmacao",
            },
        ] 
    },
    {
        enunciado: "no âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmacao: "afirmacao",
            },
            {
                texto: "alternativa 2",
                afirmacao: "afirmacao",
            },
        ] 
    },
    {
        enunciado: "no âmbito tecnologico, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmacao: "afirmacao",
            },
            {
                texto: "alternativa 2",
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
       
    }

    mostraPergunta();
