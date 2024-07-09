import '../../css/LesVins.css'
import {Btn} from '../Composant/callToAction'

export function LesVins(){
    return(
        <>
            <div id='lesVins' className='panel'>
                <div id='imageBottles'>
                    <div id='lesVinsContent'>
                        <div id='contentLesVins'>
                            <h4>
                                Déguster nos
                            </h4>
                            <h1>
                                Vins
                            </h1>
                            <p>
                                Essence et raison d’être, à Kirwan, le vin est au centre de tout. Dépositaire d’une année d’attentions et de soins au vignoble, chaque millésime est une révélation, entre impatiences et espoirs.
                            </p>
                            
                        </div>
                        {/* <Btn id={'LesVins'}/> */}
                        <Btn/>
                    </div>
                </div>
            </div>
            
            <div id='quandLeTemps' className='panel'>
                <div>
                    <h1>“Quand le temps s’arrête…</h1> 
                </div>
            </div>

            <div id='devientLieu' className='panel overflowHidden'>
                <div className='overflowHidden'>
                    <h1 id='title_devientLieu'>Il devient lieu”</h1>
                    <h4 id='secondTitle_devientLieu'><span>de </span> Chawki Abdelamir</h4>
                </div>
            </div>
        </>
    )
}