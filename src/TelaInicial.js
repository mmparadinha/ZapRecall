export default function TelaInicial({setTela}) {
    return (
        <div className="tela-inicial">
            <img src="./assets/img/logo.png" alt="logo ZapRecall" />
            <h1>ZapRecall</h1>
            <div className="tela-inicial-config">
                <input placeholder='Digite sua meta de Zaps'></input>
                <select name="conteudo">
                    <option disabled selected>Escolha seu baralho</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">JS</option>
                    <option value="react">React</option>
                </select>
                <button onClick={() => setTela(false)}>Iniciar Recall!</button>
            </div>
        </div>
    )
}