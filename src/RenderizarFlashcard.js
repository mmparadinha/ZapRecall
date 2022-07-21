import React from 'react';

export default function RenderizarFlashcard({data, index}) {
    const [aberta, setAberta] = React.useState(false);

    return (
        <li className="flashcard" key={index} onClick={() => setAberta(true)}>
            <div className={`perguntaVerso ${aberta ? 'oculta' : ''}`} >
                <h3>{data.pergunta}</h3>
                <img src="./assets/img/setinha.png" alt="setinha virar" onClick={'ocultar perguntaFrente e mostrar perguntaVerso'}/>
            </div>
            <div className={`perguntaVerso ${aberta ? '' : 'oculta'}`}>
                <h3>{data.resposta}</h3>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </li>
    )
}