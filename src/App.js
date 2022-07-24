import TelaInicial from "./TelaInicial";
import TelaRecall from "./TelaRecall.js";
import React from 'react';

export default function App() {
    let [tela, setTela] = React.useState(true);

    return (
        <>
        {tela ? <TelaInicial tela={tela} setTela={setTela}/> : <TelaRecall />}
        </>
    );
}