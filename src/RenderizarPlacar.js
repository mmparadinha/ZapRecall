export default function RenderizarPlacar({placar, index}) {
    return (
        <ion-icon name={`${placar}`} key={index}></ion-icon>
    )
}