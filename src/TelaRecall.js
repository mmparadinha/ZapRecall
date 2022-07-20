import RecallFrente from "./RecallFrente.js";
const pergunta = [1, 2, 3];


export default function TelaRecall() {
    return (
        <div className="tela-recall">
            <div className="tela-recall-titulo">
                <img src="./assets/img/logo-pequeno.png" alt="logo ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            <div className="tela-recall-recalls-box">
                {pergunta.map((value) => <RecallFrente data={value}/>)}
            </div>
            <div className="tela-recall-footer">
                <h2>x/y CONCLUÍDOS</h2>
            </div>

        </div>

    )
}