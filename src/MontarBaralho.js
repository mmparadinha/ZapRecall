export default function MontarBaralho(baralho) {
    let perguntas = [];
    let flashcards = [];

    switch (baralho) {
        case 'narutinho':
            perguntas = [
                {pergunta: 'Qual é o elemento de chakra que o Naruto primeiro aprender a dominar?', resposta: 'Ar', estado: 'fechada', resultado: ''},
                {pergunta: 'Quem eram os integrantes do time 7?', resposta: 'Naruto, Sakura e Sasuke', estado: 'fechada', resultado: ''},
                {pergunta: 'Haku era um menino ou uma menina?', resposta: 'Menino', estado: 'fechada', resultado: ''},
                {pergunta: '__ foi o único shinobi que morreu na Guerra Ninja enquanto todos os outros foram revividos pelos times de cura (incluindo a Tsunade partida em duas)', resposta: 'Neji', estado: 'fechada', resultado: ''},
                {pergunta: 'De quê forma Orochimaru se livrou da maldição do Selo Proibido conjurado pelo Hiruzen?', resposta: 'Através de suas de troca de corpos', estado: 'fechada', resultado: ''},
                {pergunta: 'Por que o ctrl+z do Pain, restaurando Konoha, foi o pior momento do Anime?', resposta: 'Desrespeito ao sentimento de angústia e perda causada aos fãs', estado: 'fechada', resultado: ''},
                {pergunta: 'Qual era a comida preferida de Naruto?', resposta: 'Rámen do Tio do Rámen', estado: 'fechada', resultado: ''},
                {pergunta: 'O poder da amizade salva tudo?', resposta: 'Sim, exceto o Neji', estado: 'fechada', resultado: ''},
            ];
        break;
        case 'one piece':
            perguntas = [
                {pergunta: 'Por que a Nami era uma ladra?', resposta: 'Para pagar uma dívida e salvar sua família', estado: 'fechada', resultado: ''},
                {pergunta: 'Como o Sanji aprende a andar nos céus?', resposta: 'No auge da sua masculinidade frágil, de tanto fugir de travestis', estado: 'fechada', resultado: ''},
                {pergunta: 'Como Luffy avisou sua tripulação que não poderiam se reencontrar em três dias, mas deveriam treinar por dois anos?', resposta: '3D2Y', estado: 'fechada', resultado: ''},
                {pergunta: 'Qual é o combustível do ciborgue Franky?', resposta: 'Franky Cola', estado: 'fechada', resultado: ''},
                {pergunta: 'Qual pirata da geração de novatos se alia ao Luffy?', resposta: 'Trafalgar Law', estado: 'fechada', resultado: ''},
                {pergunta: 'Qual é o objetivo de Luffy ao se tornar pirata?', resposta: 'Se tornar o Rei dos Piratas', estado: 'fechada', resultado: ''},
                {pergunta: 'Todos os piratas são malvados?', resposta: 'Não, alguns são apenas aventureiros sapecas', estado: 'fechada', resultado: ''},
                {pergunta: 'As frutas que dão poderes à quem as consome se chamam __', resposta: 'Akuma no MI', estado: 'fechada', resultado: ''},
            ];
        break;
        case 'js':
            perguntas = [
                {pergunta: '__ é o primeiro projeto em JS de todo bom dev', resposta: 'Hello World!', estado: 'fechada', resultado: ''},
                {pergunta: 'Qual é a utilização mais comum do comando switch?', resposta: 'Quando uma única variável pode retornar diferentes valores que necessitam diferentes ações', estado: 'fechada', resultado: ''},
                {pergunta: 'Qual conta simples é capaz de determinar se qualquer número x é par?', resposta: 'x % 2 === 0', estado: 'fechada', resultado: ''},
                {pergunta: 'Qual é a diferença entre comparar utilizando == ou ===?', resposta: 'A comparação ampla (==) pode retornar diversos falso-positivos/negativos, de acordo com conversões internas executadas pelo JS', estado: 'fechada', resultado: ''},
                {pergunta: '__ é comumente confundido como abreviação de Javascript', resposta: 'Java', estado: 'fechada', resultado: ''},
                {pergunta: 'Uma apĺicação pode facilmente ficar travada se o dev esquecer de construir uma saída para um __', resposta: 'loop', estado: 'fechada', resultado: ''},
                {pergunta: 'É possível modificar dados HTML via JS utilizando qual mecanismo de manipulação?', resposta: 'DOM', estado: 'fechada', resultado: ''},
                {pergunta: 'Via JS é possível automatizar longas repetições de conferência manual __', resposta: 'por meio de comparadores e loops', estado: 'fechada', resultado: ''},

            ];
        break;
        case 'react':
            perguntas = [
                {pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript', estado: 'fechada', resultado: ''},
                {pergunta: 'O React é __', resposta: 'uma biblioteca JavaScript para construção de interfaces', estado: 'fechada', resultado: ''},
                {pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula', estado: 'fechada', resultado: ''},
                {pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões', estado: 'fechada', resultado: ''},
                {pergunta: 'O ReactDOM nos ajuda __', resposta: 'interagindo com a DOM para colocar componentes React na mesma', estado: 'fechada', resultado: ''},
                {pergunta: 'Usamos o npm para __', resposta: 'gerenciar os pacotes necessários e suas dependências', estado: 'fechada', resultado: ''},
                {pergunta: 'Usamos props para __', resposta: 'passar diferentes informações para componentes ', estado: 'fechada', resultado: ''},
                {pergunta: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente', estado: 'fechada', resultado: ''}
            ];
        break;
        default:
            alert('Houston, we have a problem! Por favor reinicie o seu Recall')
    }

    perguntas.forEach((value) => {
        flashcards.push({...value});
    });

    flashcards.sort(() => Math.random() - 0.5);
    return flashcards;
}