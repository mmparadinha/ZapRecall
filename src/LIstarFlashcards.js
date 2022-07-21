import RenderizarFlashcard from "./RenderizarFlashcards.js";

export default function ListarFlashcards({data, index}) {
    return (
        <li className="pergunta" key={index} onClick={(data, index) => <RenderizarFlashcard data={data} index={index}/>}>
                <h3>Flashcard {index}</h3>
                <ion-icon name="play-outline"></ion-icon>
        </li>
    )
}

{/* <ion-icon name="close-circle"></ion-icon>
<ion-icon name="help-circle"></ion-icon>
<ion-icon name="checkmark-circle"></ion-icon> */}