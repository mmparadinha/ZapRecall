import RenderizarFlashcards from "./RenderizarFlashcards.js";
import RenderizarPlacar from "./RenderizarPlacar";
import React from 'react';
import MensagemFinal from "./MensagemFinal.js";
import MensagemMeta from "./MensagemMeta.js";

export default function TelaRecall({setTela, baralho, metaZap}) {
    const [placar, setPlacar] = React.useState([]);
    const [erros, setErros] = React.useState(0);
    const [zaps, setZaps] = React.useState(0);
    const flashcards = baralho;
 
    return (
        <div className="tela-recall">
            <div className="tela-recall-titulo">
                <img src="./assets/img/logo-pequeno.png" alt="logo ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            <ul>
                {flashcards.map((value, index) => <RenderizarFlashcards data={value} index={index} placar={placar} setPlacar={setPlacar} erros={erros} setErros={setErros} zaps={zaps} setZaps={setZaps}/>)}
            </ul>
            <div className="tela-recall-footer">
                {placar.length === flashcards.length ? <MensagemFinal erros={erros}/> : ''}
                <h3>{placar.length}/{flashcards.length} CONCLUÍDOS</h3>
                <div>
                    {placar.length !== 0 ? placar.map((value, index) => <RenderizarPlacar placar={value} index={index}/>) : ''}
                </div>
                {placar.length === flashcards.length ? <MensagemMeta metaZap={metaZap} zaps={zaps} erros={erros}/> : ''}
                {placar.length === flashcards.length ? <button onClick={() => setTela(true)}>REINICIAR RECALL</button> : ''}
            </div>
        </div>

    )
}