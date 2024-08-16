let atual = 0;
let perguntaAtual;


function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado; 
}

mostraAlternativa(){
    for (const pergunta of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = pergunta;
        botaoAlternativa.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}





const perguntas = [
{
    enunciado: "ambito 1",
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
    enunciado: "ambito 2",
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
    enunciado: "ambito 3",
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

mostraAlternativa();
mostraPergunta();