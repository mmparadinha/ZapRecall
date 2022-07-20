export default function TelaInicial() {
    return (
        <div className="tela-inicial">
            <img src="./assets/img/logo.png" alt="logo ZapRecall" />
            <h1>ZapRecall</h1>
            <button onClick={() => console.log('clicou')}>Iniciar Recall!</button>
        </div>
    )
}