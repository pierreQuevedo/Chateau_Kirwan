import '../../css/ScrollBar.css'

    // Animation à l'entrée de la page Home
    const accueil_delayAnimation = 5900

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            // Animation ScrollBar
            const accueil_lineAnimation = document.querySelector('.scrollBar__lineAnimation');
            accueil_lineAnimation.classList.add('scrollBar__lineAnime');
        }, accueil_delayAnimation);
    })

    

export function ScrollBar(){

    

    return(
        <>
            <div id="scrollBar_line1" className="scrollBar_line scrollBar__lineAnimation"></div>
            <div id="scrollBar_line2" className="scrollBar_line">
                <div className="circle-container">
                    <div id="scrollbar__circle_accueil" className="scrollbar__lineCircle"></div>
                    <div id="content_circle-text">
                        <p className="circle_text">Accueil</p> 
                    </div>
                </div>
                <div className="circle-container">
                    <div id="scrollbar__circle_lesVins" className="scrollbar__lineCircle"></div>
                    <div id="content_circle-text">
                        <p className="circle_text">Les vins</p>
                    </div>
                </div>
                <div className="circle-container">
                    <div id="scrollbar__circle_histoire" className="scrollbar__lineCircle"></div>
                    <div id="content_circle-text">
                        <p className="circle_text">L’histoire</p>
                    </div>
                </div>
                <div className="circle-container">
                    <div id="scrollbar__circle_leTerroir" className="scrollbar__lineCircle"></div>
                    <div id="content_circle-text">
                        <p className="circle_text">Le terroir</p>
                    </div>
                </div>
                <div className="circle-container">
                    <div id="scrollbar__circle_visites&Ateliers" className="scrollbar__lineCircle"></div>
                    <div id="content_circle-text">
                        <p className="circle_text">Visites & Ateliers</p>
                    </div>
                </div>
                <div className="circle-container">
                    <div id="scrollbar__circle_reception&Hospitalite" className="scrollbar__lineCircle"></div>
                    <div id="content_circle-text">
                        <p className="circle_text">Réception & Hospitalité</p>
                    </div>
                </div>
                <div className="circle-container">
                    <div id="scrollbar__circle_actualites" className="scrollbar__lineCircle"></div>
                    <div id="content_circle-text">
                        <p className="circle_text">Actualités</p>
                    </div>
                </div>
            </div>
        </>

    )
}