import RenderizarFlashcard from "./RenderizarFlashcard.js";

export default function ListarPerguntas({data, index}) {
    return (
        <li className="pergunta" key={index} onClick={(data, index) => <RenderizarFlashcard data={data} index={index}/>}>
                <h3>Flashcard {index}</h3>
                <ion-icon name="play-outline"></ion-icon>
        </li>
    )
}