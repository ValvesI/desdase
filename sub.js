let atual = 0;
let perguntaAtual;


const pergumtas = [ 
    {
        enunciado: "no âmbito social, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmação: "afirmação",
            },
            {
                texto: "alternativa 2",
                afirmação: "afirmação",
            },
        ] 
    },
    {
        enunciado: "no âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmação: "afirmação",
            },
            {
                texto: "alternativa 2",
                afirmação: "afirmação",
            },
        ] 
    },
    {
        enunciado: "no âmbito tecnologico, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmação: "afirmação",
            },
            {
                texto: "alternativa 2",
                afirmação: "afirmação",
            },
        ] 
    },
]

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
}

function mostraAlternativa(){
    for (const pergunta of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = pergunta.texto;
        botaoAlternativa.addEventListener ("click", ()=> respostaSelecionada(pergunta));
        caixaAlternativas.appendChild(botaoAlternativa);
    }

    }