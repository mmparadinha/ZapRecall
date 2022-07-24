import React from 'react';
import ListarCard from './ListarCard';

export default function RenderizarFlashcards({ data, index, placar, setPlacar, erros, setErros}) {
    const [status, setStatus] = React.useState('fechada');
    const [frente, setFrente] = React.useState(true);
    const [resultado, setResultado] = React.useState('');

    function responder(resposta, icon) {
        setResultado(resposta.target.className)
        setPlacar([...placar,icon])
        if (resposta.target.className === 'ruim') {
            setErros(erros + 1);
        }
    }

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
                            <button className="ruim" onClick={(value) => responder(value, 'close-circle')}>Não lembrei...</button>
                            <button className="ok" onClick={(value) => responder(value, 'help-circle')}>Quase esqueci</button>
                            <button className="bom" onClick={(value) => responder(value, 'checkmark-circle')}>Zap!</button>
                        </div>
                    </div>
                </li>)
        } else {
            return (
                <ListarCard resultado={resultado} index={index+1} setStatus={setStatus}/>)
        }
}

    return (
        teste()
    )
}