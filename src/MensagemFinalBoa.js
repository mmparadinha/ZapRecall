export default function MensagemFinal({erros}) {
    switch (erros) {
        case 0:
            return (
            <div className="mensagem-final">
                <div>
                    <img src="./assets/img/party.png" alt="emoji em festa" />
                    <h2>Parabéns!</h2>
                </div>
                <h3>Você não esqueceu nenhum flashcard!</h3>
            </div>
            )
        default: 
            return (
                <div className="mensagem-final">
                    <div>
                    <img src="./assets/img/sad.png" alt="emoji nervoso" />
                    <h2>Baaah!</h2>
                </div>
                    <h3>Ainda faltam alguns...<br/>Mas não desanime!</h3>
                </div>
            )
        }
}