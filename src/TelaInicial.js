export default function TelaInicial({tela, setTela}) {
    return (
        <div className="tela-inicial">
            <img src="./assets/img/logo.png" alt="logo ZapRecall" />
            <h1>ZapRecall</h1>
            <button onClick={() => setTela(!tela)}>Iniciar Recall!</button>
        </div>
    )
}