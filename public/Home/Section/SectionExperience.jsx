import '../../css/SectionExperience.css'

const accueil_delayAnimation = 5900

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const accueil_h1Animation = document.querySelector('.experience__h1Animation');
        accueil_h1Animation.classList.add('experience__h1Anime');
        const accueil_h4Animation = document.querySelector('.experience__h4Animation');
        accueil_h4Animation.classList.add('experience__h4Anime');
    }, accueil_delayAnimation);
})

export function Experience() {
    
    return (
        <div id="experienceContent">
            <div id='experienceText'>
                <h4 className='experience__h4Animation'>Vivez</h4>
                <h1 className='experience__h1Animation'>L’expérience<br/>
                de l’instant</h1>
            </div>
        </div>
    )
}