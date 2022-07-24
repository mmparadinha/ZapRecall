export default function ListarCard({resultado, setStatus, index}) {
    let iconName = '';

    switch (resultado) {
        case 'ruim':
            iconName = 'close-circle';
            break;
        case 'ok':
            iconName = 'help-circle';
            break;
        case 'bom':
            iconName = 'checkmark-circle';
            break;
        default:
            iconName = 'play-outline';
    }

    return (
        <li className={`card ${resultado}`} key={index} onClick={() => setStatus('aberta')}>
            <h4>Flashcard {index}</h4>
            <ion-icon name={iconName}></ion-icon>
        </li>)
}