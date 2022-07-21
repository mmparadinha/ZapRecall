import RenderizarFlashcards from "./RenderizarFlashcards.js";

const perguntas = [{pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript', estado: 'fechada', resultado: ''},
                  {pergunta: 'O React é __', resposta: 'uma biblioteca JavaScript para construção de interfaces', estado: 'fechada', resultado: ''},
                  {pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula', estado: 'fechada', resultado: ''},
                  {pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões', estado: 'fechada', resultado: ''},
                  {pergunta: 'O ReactDOM nos ajuda __', resposta: 'interagindo com a DOM para colocar componentes React na mesma', estado: 'fechada', resultado: ''},
                  {pergunta: 'Usamos o npm para __', resposta: 'gerenciar os pacotes necessários e suas dependências', estado: 'fechada', resultado: ''},
                  {pergunta: 'Usamos props para __', resposta: 'passar diferentes informações para componentes ', estado: 'fechada', resultado: ''},
                  {pergunta: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente', estado: 'fechada', resultado: ''},
];

const flashcards = [];

function criarFlashcards() {
    perguntas.forEach((value) => {
        flashcards.push({ ...value});
    });

    flashcards.sort(() => Math.random() - 0.5);
    return flashcards;
}

criarFlashcards();

export default function TelaRecall() {
    return (
        <div className="tela-recall">
            <div className="tela-recall-titulo">
                <img src="./assets/img/logo-pequeno.png" alt="logo ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            <ul>
                {flashcards.map((value, index) => <RenderizarFlashcards data={value} index={index+1}/>)}
            </ul>
            <div className="tela-recall-footer">
                <h2>{perguntas.estado !== 'fechada'}/{perguntas.length} CONCLUÍDOS</h2>
            </div>

        </div>

    )
}