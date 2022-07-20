import TelaInicial from "./TelaInicial";
import TelaRecall from "./TelaRecall.js";
import React from 'react';

export default function App() {
    let [tela, setTela] = React.useState(TelaRecall);

    return (
        <>
        {tela}
        </>
    );
}