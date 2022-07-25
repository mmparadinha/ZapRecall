import TelaInicial from "./TelaInicial";
import TelaRecall from "./TelaRecall.js";
import React from 'react';

export default function App() {
    let [tela, setTela] = React.useState(true);
    let [baralho, setBaralho] = React.useState('')
    let [metaZap, setMetaZap] = React.useState(0);

    return (
        <>
        {tela ? <TelaInicial setTela={setTela} setBaralho={setBaralho} setMetaZap={setMetaZap}/> : <TelaRecall setTela={setTela} baralho={baralho} metaZap={metaZap}/>}
        </>
    );
}