import '../../css/Evenement.css'
import { Btn } from '../Composant/callToAction'

export function Evenement() {

    return(
        <>
            <div id="BgImageEvenement">

            </div>
            <div id="domaineEvenement">
                <h4>
                    Organisez vos
                </h4>
                <h1>
                    Réceptions<br/>& Évènements
                </h1>
                {/* <Btn id={'Evenement_btn'}/> */}
                <Btn />
            </div>
        </>
    )
}