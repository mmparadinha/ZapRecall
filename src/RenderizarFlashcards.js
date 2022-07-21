import React from 'react';

export default function RenderizarFlashcard({ data, index }) {
    const [status, setStatus] = React.useState('fechada');
    const [frente, setFrente] = React.useState(true);
    const [resultado, setResultado] = React.useState('');


    function teste() {
        if (status === 'aberta' && resultado === '') {
            return (
                <li className='flashcard' key={index}>
                    <div className={`flashcard-frente ${frente ? '' : 'oculta'}`} >
                        {data.pergunta}
                        <img src="./assets/img/setinha.png" alt="setinha virar" onClick={() => setFrente(false)}/>
                    </div>
                    <div className={`flashcard-verso ${frente ? 'oculta' : ''}`}>
                        {data.resposta}
                        <div className="botoes">
                            <button className="ruim" onClick={() => setResultado('ruim')}>Não lembrei</button>
                            <button className="ok" onClick={() => setResultado('ok')}>Quase esqueci</button>
                            <button className="bom" onClick={() => setResultado('bom')}>Zap!</button>
                        </div>
                    </div>
                </li>)
        } else {
            return (
                <li className={`pergunta ${resultado}`} key={index} onClick={() => setStatus('aberta')}>
                    <h3>Flashcard {index}</h3>
                    <ion-icon name="play-outline"></ion-icon>
                </li>)
        }
}

    return (
        teste()
    )
}