import '../css/Loader.css'
import loaderLogo from '../Loader/assets/Loader_logoKirwan.svg'

export function Loader(){

    return(
        <section id="loader__section">
            <img src={loaderLogo} alt="Logo du Château Kirwan"/>
            <div id="loader">
                <div className="loader__line loader__line1"></div>
                <div className="loader__line loader__line2"></div>
                <div className="loader__line loader__circle"></div>
            </div>
        </section>
    )
}