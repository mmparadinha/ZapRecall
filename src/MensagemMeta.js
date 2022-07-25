export default function MensagemMeta({metaZap, zaps, erros}) {
    if (zaps >= metaZap && erros === 0) {
        return (
            <div className="mensagem-final meta">
                <h2>Ah, e sobre a sua meta: segura, Hogwarts!</h2>
                <h3>O bruxão tá voando! ({zaps}/{metaZap})</h3>
            </div>
        )
    } else if (zaps >= metaZap) {
        return (
            <div className="mensagem-final meta">
                <h2>Ah, e sobre a sua meta: tá mandando bem!</h2>
                <h3>Essa meta tá garantida, bora pra mais! ({zaps}/{metaZap})</h3>
            </div>
        )
    } else {
        return (
            <div className="mensagem-final meta">
                <h2>Ah, e sobre a sua meta: continue tentando...</h2>
                <h3>Sempre se reerga mais vezes do que cair! ({zaps}/{metaZap})</h3>
            </div>
        )
    }
}