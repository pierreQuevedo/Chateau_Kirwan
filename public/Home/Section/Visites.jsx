import '../../css/Visites.css'
import { Btn } from '../Composant/callToAction'

export function Visites() {
    
    return(
        <>
            <div id="BgVisites">

            </div>
            <div id="sectionVisitesContent">
                <h4 id='visites_secondTitle'>Participez à nos</h4>
                <h1 id='visites_mainTitle'>Visites &<br/>Ateliers</h1>
                {/* <Btn id={'Visites_btn'}/> */}
                <Btn className={'visites_Btn'}/>
            </div>
        </>
    )
}