import '../css/Home.css'
import './assets/chateauBackgroundImage__experience.jpg'
import { Experience } from './Section/SectionExperience'
import { LesVins } from './Section/LesVins.jsx'
import { Visites } from './Section/Visites.jsx'
import { Domaine } from './Section/Domaine.jsx'
import { Evenement } from './Section/Evenement.jsx'
import { Header } from './Section/Header.jsx'
import { ScrollBar } from './Section/ScrollBar.jsx'
import { ScrollBtn } from './Section/ScrollBtn.jsx'

const accueil_delayAnimation = 5900

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const accueil__backgroundImageAnimation = document.querySelector('.backgroundImageAnimation');
        accueil__backgroundImageAnimation.classList.add('backgroundImageAnime');
    }, accueil_delayAnimation);
})

export function Home() {
    
    return(
        <>
            {/* Header Navbar */}

            <header>
                <Header/>
            </header>

            {/* Home Page Content */}

            <main id='homePage'>

                {/* Landing Home */}

                <section id='sectionExperience'>
                    <div className='backgroundImage backgroundImageAnimation'></div>
                    <Experience id='contentExperience'/>
                </section>

                {/* Section Les Vins */}

                <section id='sectionLesVins' className='horizontal'>
                    <LesVins/>
                </section>

                {/* Section Visites */}

                <section id='sectionVisites'>
                    <Visites/>
                </section>

                {/* Section Domaine */}

                <section id='sectionDomaine'>
                    <Domaine/>
                </section>
                
                {/* Section Evenement */}

                <section id='sectionEvenement'>
                    <Evenement/>
                </section>
            </main>

            {/* ScrollBar Trigger */}

            <div id='scrollBar'>
                <ScrollBar/>
            </div>

            <ScrollBtn/>
        </>
    )
}