import React from "react"
import MontarBaralho from "./MontarBaralho.js";

export default function TelaInicial({setTela, setBaralho, setMetaZap}) {

    function iniciarRecall() {
        setMetaZap(document.querySelector('.meta-zap').value)
        setBaralho(MontarBaralho(document.querySelector('.baralho').value))
        if (document.querySelector('.baralho').value !== 'Escolha seu baralho' && document.querySelector('.meta-zap').value >= 1 && document.querySelector('.meta-zap').value <= 8) {
            setTela(false);
        } else {
            alert('Configure seu Recall')
        }
    }

    return (
        <div className="tela-inicial">
            <img src="./assets/img/logo.png" alt="logo ZapRecall" />
            <h1>ZapRecall</h1>
            <div className="tela-inicial-config">
                <input className='meta-zap' placeholder='Defina sua meta de Zaps'></input>
                <select className='baralho' name="baralho">
                    <option disabled selected>Escolha seu baralho</option>
                    <option value="narutinho">Narutinho</option>
                    <option value="one piece">Piratinha que estica</option>
                    <option value="js">JS</option>
                    <option value="react">React</option>
                </select>
                <button onClick={iniciarRecall}>Iniciar Recall!</button>
            </div>
        </div>
    )
}